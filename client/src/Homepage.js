import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { address_getAll } from "./server";
import "./App.css";

class Homepage extends Component {
  state = {
    addresses: []
  };
  componentDidMount = () => {
    address_getAll().then(addresses =>
      this.setState({ addresses }, this.printPeopleInfo)
    );
  };

  printPeopleInfo = () => {
    let person = this.state.addresses.map(address => {
      return (
        <div key={address.id}>
          <h1>
            Name: &nbsp; {address.firstName} &nbsp; {address.lastName}
          </h1>
          <p>
            Mailing address: &nbsp;
            {address.street}
          </p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
          <p>{address.sendDate}</p>
        </div>
      );
    });
    return person;
  };

  render() {
    return <div>{this.printPeopleInfo()}</div>;
  }
}

export default withRouter(Homepage);
