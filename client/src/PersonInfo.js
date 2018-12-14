import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addNewPerson, selectPersonInfoById } from "./server";
import moment from "moment";
// import Moment from "react-moment";

class PersonInfo extends Component {
  state = {
    personId: undefined,
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    sendDate: new Date()
  };
  componentDidMount = () => {
    const { personId } = this.props.match.params;
    if (personId) {
      selectPersonInfoById(personId)
        .then(resp => {
          // let sendDate = moment(resp.sendDate);
          console.log("select response===", resp);
          this.setState({
            personId: resp.id,
            firstName: resp.firstName,
            lastName: resp.lastName,
            street: resp.street,
            city: resp.city,
            state: resp.state,
            zip: resp.zip
            // sendDate
          });
        })
        .catch(err => console.error("grabbing person info error===", err));
    }
  };

  handleAddNewPerson = () => {
    let { firstName, lastName, street, city, state, zip } = this.state;
    let sendDate = moment(this.state.sendDate);
    const personInfo = {
      firstName,
      lastName,
      street,
      city,
      state,
      zip,
      sendDate
    };
    addNewPerson(personInfo)
      .then(this.handleRedirect)
      .catch(error => console.error("submit new person error===", error));
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleChangeDate = sendDate => {
    this.setState({ sendDate });
  };

  onChangeRaw = e => {
    e.preventDefault();
  };

  handleRedirect = () => {
    this.props.history.push("/homepage");
  };
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
              name="sendDate"
              selected={this.state.sendDate}
              onChange={this.handleChangeDate}
              onChangeRaw={this.onChangeRaw}
              // minDate={moment()}
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
