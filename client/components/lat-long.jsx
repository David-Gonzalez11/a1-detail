import React, { Component } from 'react';

export default class Geocode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
    });
  }

  render() {
    return (
     <></>
    );
  }
}
