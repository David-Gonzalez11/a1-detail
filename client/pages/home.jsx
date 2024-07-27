import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  demoLogin() {
    this.setState({
      username: 'user',
      password: 'user'
    });
  }

  render() {
    const style = {
      width: '50vw'
    };
    return (
      <>

        <div className='row image-container'>
          <img src="https://www.amcxtremedetailing.com/wp-content/uploads/2022/04/AMC-Xtreme-Mobile-Detailing-Las-Cruces-NM-mobile-detailing-and-cleaning-services-for-car-rvs-and-boats-15.jpeg" className="main-image"style={style}/>
        </div>
        <div>
          <p className='fs-2 text-primary mt-3 h4'>Changing the appearance of your vehicle with quality service</p>
        </div>

        <div className="button-box col-lg-12">
          <a className="btn btn-primary fs-5" role="button" id='login' onClick={this.handleClick} href="#sign-in">LOGIN</a>
          <a className="btn btn-primary fs-5" role="button" id='signup' onClick={this.handleClick} href="#sign-up">SIGN UP</a>
        </div>
        <div className='text-center'>
        </div>

      </>

    );
  }
}
