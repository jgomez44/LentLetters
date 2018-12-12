import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import { addNewPerson } from "./server";
import Moment from "react-moment";

class PersonInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    sendDate: new Date()
  };
  componentDidMount = () => {};

  handleAddNewPerson = () => {
    let {
      firstName,
      lastName,
      street,
      city,
      state,
      zip,
      sendDate
    } = this.state;
    addNewPerson(firstName, lastName, street, city, state, zip, sendDate)
      .then(this.handleRedirect())
      .catch(error => console.error("submit new person error===", error));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSelectDate = () => {};

  handleChangeDate = () => {};

  handleRedirect = () => {};
  render() {
    return (
      <div>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>First Name:</Label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name:</Label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>Street:</Label>
            <Input
              type="text"
              name="street"
              value={this.state.street}
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>City:</Label>
            <Input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>State:</Label>
            <Input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Zip:</Label>
            <Input
              type="number"
              name="zip"
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Send Date:</Label>
            <DatePicker
              selected={this.state.date}
              onSelect={this.handleSelectDate}
              onChange={this.handleChangeDate}
            />
          </FormGroup>
          <Button
            onClick={this.handleAddNewPerson}
            className="btn btn-success"
            type="button"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default withRouter(PersonInfo);
