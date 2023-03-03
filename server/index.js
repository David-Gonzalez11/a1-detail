// eslint-disable-line
require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const argon2 = require('argon2');
const app = express();
const publicPath = path.join(__dirname, 'public');
const pg = require('pg');
const jwtDecode = require('jsonwebtoken');
const auth = require('./authorization-middleware');
const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

const jsonMiddleware = express.json();

app.use(jsonMiddleware);
app.post('/api/auth/sign-up', (req, res, next) => {
  const { password, email, name } = req.body;
  if (!email || !password) {
    throw new ClientError(400, 'email and password are required fields');
  }

  argon2.hash(password)
    .then(hashedPassword => {
      const text = `insert into "users" ("name", "email", "hashedPassword")
      values ($1, $2, $3)
      returning "name", "email", "userId"`;
      const values = [name, email, hashedPassword];
      db.query(text, values)
        .then(result => {
          res.status(201).json(result.rows[0]);
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { password, email, name } = req.body;
  if (!email || !password) {
    throw new ClientError(401, 'invalid login');
  }

  /* your code starts here */
  const sql = ` select "userId",
  "hashedPassword",
  "email",
  "name"
  from "users"
  where "email" = $1 and "name" = $2
  `;
  const values = [email, name];
  db.query(sql, values)
    .then(result => {
      const rows = result.rows[0];
      if (result.rows.length === 0) {
        throw new ClientError(401, 'invalid login');
      }
      argon2.verify(result.rows[0].hashedPassword, password)
        .then(isPassword => {
          if (!isPassword) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = {
            userId: rows.userId,
            email: rows.email,
            name: rows.name
          };
          const token = jwtDecode.sign(payload, process.env.TOKEN_SECRET);
          res.status(201).json({
            token,
            user: payload
          });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});
app.post('/api/appointments/', (req, res, next) => {
  app.use(auth);

  const { name, address, city, appointmentScheduled, service } = req.body;
  if (!name || !city || !address) {
    throw new ClientError(401, 'All fields are required');
  }
  const userId = req.user.userId;

  const sql = `insert into "appointments" ("name", "address", "city", "appointmentScheduled", "userId", "service")
values ($1, $2, $3, $4, $5, $6)
 returning *`;
  const values = [name, address, city, appointmentScheduled, userId, service];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    }).catch(err => next(err));
});

app.get('/api/appointments', (req, res, next) => {
  const userId = req.user.userId;
  const sql = `select *
  from "appointments"
  where "userId" = $1`;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    }).catch(err => next(err));
});
app.delete('/api/appointments/:appointmentId', (req, res, next) => {
  const appointmentId = Number(req.params.appointmentId);
  if (!Number.isInteger(appointmentId) || appointmentId <= 0) {
    res.status(400).json({
      error: 'appointmentId must be a positive integer'
    });
    return;
  }
  const sql = `delete from "appointments"
   where "appointmentId" = $1
   returning *`;
  const values = [appointmentId];
  db.query(sql, values).then(result => {
    const appt = result.rows[0];
    if (!appt) {
      res.status(404).json({
        error: `Cannot find user with appointmentId ${appointmentId}`
      });
    } else {
      res.sendStatus(204);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({
      error: 'An unexpected error occured'
    });
  });
});

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
