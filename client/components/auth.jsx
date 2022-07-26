import React from 'react';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handldClick() {

  }

  render() {
    return (
      <>
        <div className='row'>
          <div className='nav-bar'>
            <i className="bi bi-justify"></i>
          </div>
        </div>

        <div className='row image-container'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tOIHQUoZl3TVGJuEKgjGbTWKXZweo_tldg&usqp=CAU" />
        </div>
        <div>
          <p>Changing the appearance of your vehicle with quality service</p>
        </div>

        <div className='row'>
          <button className='btn btn-primary btn-sm'>LOGIN</button>
          <button className='btn btn-primary btn-sm'>SIGNUP</button>
        </div>
      </>

    );
  }
}
