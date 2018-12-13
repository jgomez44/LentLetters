import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { address_getAll, deletePersonInfo } from "./server";
import "./App.css";
import moment from "moment";

class Homepage extends Component {
  state = {
    addresses: []
  };
  componentDidMount = () => {
    this.updateList();
  };

  handleDeletePersonInfo = id => {
    deletePersonInfo(id, this.updateList);
  };

  updateList = () => {
    address_getAll().then(addresses =>
      this.setState({ addresses }, this.printPeopleInfo)
    );
  };

  printPeopleInfo = () => {
    let person = this.state.addresses.map(address => {
      return (
        <div key={address.id}>
          <h3>
            Name: &nbsp; {address.firstName} &nbsp; {address.lastName}
          </h3>
          <p>
            Mailing address: &nbsp;
            {address.street}
          </p>
          <p>
            {address.city}, {address.state} {address.zip}
          </p>
          <p>{moment(address.sendDate).format("L")}</p>

          <button className="btn btn-info" type="button">
            Edit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => this.handleDeletePersonInfo(address.id)}
          >
            Delete
          </button>
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
