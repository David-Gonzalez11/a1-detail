import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../lib/app-context';
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
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
          window.location.hash = '#main-page';
        }
      });
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-up'
      : '#sign-in';
    const submitButtonText = action === 'sign-up'
      ? 'Create'
      : 'Login';

    const headingtext = action === 'sign-in' ? 'Sign In' : 'Create Account';

    return (
      <form className="w-100 container-fluid border  pt-3" onSubmit={handleSubmit}>
       <h5 className='text-center pt-2'>{headingtext}</h5>

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
          <small>
            <a className="text-muted" href={alternateActionHref}>
            </a>
          </small>
          <div className='text-center'></div>
          <button type="submit" className="btn btn-primary col-md-6 btn-lg continue-btn uer-select-auto mb-2" href="#main-page">
            {submitButtonText}
          </button>
        </div>

      </form>
    );
  }
}
AuthForm.contextType = AppContext;
