import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { address_getAll } from "./server";
import "./App.css";

class Homepage extends Component {
  state = {
    addresses: []
  };
  componentDidMount = () => {
    address_getAll().then(addresses => this.setState({ addresses }));
    let person = this.state.addresses.map(address => {
      return (
        <div>
          <h1>{address.firstName}</h1>
          <h1>{address.lastName}</h1>
          <p />
        </div>
      );
    });
    return person;
  };

  render() {
    return <div>{this.state.addresses}</div>;
  }
}

export default withRouter(Homepage);
