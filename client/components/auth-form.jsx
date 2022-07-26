import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/sign-up', req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-up';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;

    const submitButtonText = action === 'sign-up'
      ? 'Login'
      : 'Continue';
    const styles = {
      backgroundColor: 'black',
      color: 'white',
      height: '800px',
      width: '100%'
    };
    return (
      <form className="w-100" style={styles} onSubmit={handleSubmit}>
       <h5 className='text-center pt-2'>Create Account</h5>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            required
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            className="form-control bg-light" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control bg-light" />
        </div>

        <div className="mb-3">
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control bg-light" />
</div>
        <div className="d-flex justify-content-between align-items-center">

          <button type="submit" className="btn btn-primary continue-btn">
            {submitButtonText}
          </button>
        </div>

      </form>
    );
  }
}
