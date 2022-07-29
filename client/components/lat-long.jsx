import React, { Component } from 'react';

export default class Apps extends Component {
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
      <div>
      </div>
    );
  }
}
