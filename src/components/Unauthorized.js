import React, { Component } from 'react';


class Unauthorized extends Component {
  render() {
    return (
      <div>
          <h1>Wooops, you have to log in</h1>
    <p>Your account {this.props.account} is unathorized. Please Sign up!</p>
      </div>
    );
  }
}

export default Unauthorized;