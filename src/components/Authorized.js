import React, { Component } from 'react';


class Authorized extends Component {
  render() {
    return (
      <div>
          <h1>You are Athorithed</h1>
    <p>Your account {this.props.account} has been authorized</p>
      </div>
    );
  }
}

export default Authorized;
