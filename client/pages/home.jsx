import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    const style = {
      width: '700px'
    };
    return (
      <>

        <div className='row image-container'>
          <img src="https://media.istockphoto.com/vectors/car-wash-cartoon-symbol-vector-illustration-vector-id1282310388?k=20&m=1282310388&s=612x612&w=0&h=mC7n35uNLQkSYWGQjyAsN8oU8MO25U3Me_6y9iq-duw=" className="main-image"style={style}/>
        </div>
        <div>
          <p className='fs-2 text-primary mt-3 h4'>Changing the appearance of your vehicle with quality service</p>
        </div>

        <div className="button-box col-lg-12">
          <a className="btn btn-primary fs-5" role="button" id='login' onClick={this.handleClick} href="#sign-in">LOGIN</a>
          <a className="btn btn-primary fs-5" role="button" id='signup' onClick={this.handleClick} href="#sign-up">SIGN UP</a>
        </div>
      </>

    );
  }
}
