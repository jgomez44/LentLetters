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

  handleRedirect = () => {};
  render() {
    return (
      <div>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>First Name:</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name:</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>Street:</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>Suite/Apartment:</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>City:</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>State:</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup>
            <Label>Zip:</Label>
            <Input type="number" />
          </FormGroup>

          <FormGroup>
            <Label>Send Date:</Label>
            <DatePicker />
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
