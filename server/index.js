require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const argon2 = require('argon2');
const app = express();
const publicPath = path.join(__dirname, 'public');
const pg = require('pg');

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

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { password, email } = req.body;
  if (!email || !password) {
    throw new ClientError(400, 'email and password are required fields');
  }

  /* your code starts here */
  argon2.hash(password)
    .then(hashedPassword => {
      const text = `insert into "users" ("email", "hashedPassword")
      values ($1, $2)
      returning "email", "userId"`;
      const values = [email, hashedPassword];
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
app.use(errorMiddleware);
