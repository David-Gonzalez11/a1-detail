import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

  }

  render() {
    return (
      <>

        <div className='row image-container'>
          <img src="https://media.istockphoto.com/vectors/car-wash-cartoon-symbol-vector-illustration-vector-id1282310388?k=20&m=1282310388&s=612x612&w=0&h=mC7n35uNLQkSYWGQjyAsN8oU8MO25U3Me_6y9iq-duw=" />
        </div>
        <div>
          <p className='home-text'>Changing the appearance of your vehicle with quality service</p>
        </div>

        <div className="button-box col-lg-12">
          <a className="btn btn-primary" role="button" id='login' onClick={this.handleClick}>LOGIN</a>
          <a className="btn btn-primary" role="button" id='signup' onClick={this.handleClick}>SIGN UP</a>
        </div>
      </>

    );
  }
}
