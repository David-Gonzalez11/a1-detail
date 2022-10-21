import React from 'react';
import AppContext from '../lib/app-context';
export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(event) {
    this.setState({
      email: 'demo@demo.com',
      name: 'demo1',
      password: 'demo'
    });
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
    const hideDemobtn = action === 'sign-up' ? 'invisible' : '';
    const hideLoginButon = action === 'sign-in' ? 'invisible' : '';

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
            className="form-control bg-light"
            value={this.state.name} />

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
            className="form-control bg-light"
            value={this.state.email}/>
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
          className="form-control bg-light"
          value={this.state.password} />
</div>
        <div className="d-flex justify-content-between align-items-center">
          <small>
            <a className="text-muted" href={alternateActionHref}>
            </a>
          </small>
          <div className='text-center'></div>
          <button type="submit" className={`btn btn-primary col-md-6 btn-md continue-btn uer-select-auto mt-3 mb-2 ${hideLoginButon}`} href="#main-page">
            {submitButtonText}
          </button>
        </div>
        <div className='text-center'>
          <button className={`btn btn-info col-md-4 ${hideDemobtn}`} onClick={this.demoLogin}>Demo Login</button>
        </div>
      </form>
    );
  }
}
AuthForm.contextType = AppContext;
