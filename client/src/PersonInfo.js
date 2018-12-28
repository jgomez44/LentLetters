import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addNewPerson, selectPersonInfoById, updatePerson } from "./server";
import moment from "moment";

class PersonInfo extends Component {
  state = {
    personId: undefined,
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    sendDate: new Date(),
    loading: false
  };
  componentDidMount = () => {
    const { personId } = this.props.match.params;
    if (personId) {
      this.setState({ loading: true });
      selectPersonInfoById(personId)
        .then(resp => {
          let sendDate = moment(resp.sendDate);
          console.log("sendDate====", sendDate);
          console.log("select response===", resp);
          this.setState({
            personId: resp.id,
            firstName: resp.firstName,
            lastName: resp.lastName,
            street: resp.street,
            city: resp.city,
            state: resp.state,
            zip: resp.zip,
            sendDate: resp.sendDate,
            loading: false
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

  handleUpdatePerson = () => {
    const {
      personId,
      city,
      street,
      state,
      sendDate,
      zip,
      firstName,
      lastName
    } = this.state;
    const personInfo = {
      id: personId,
      city,
      street,
      state,
      firstName,
      lastName,
      zip,
      sendDate
    };
    updatePerson(personId, personInfo)
      .then(this.handleRedirect)
      .catch(err => console.log("update error===", err));
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
          <center>
            <img
              src="https://i.pinimg.com/originals/f6/f6/6f/f6f66f1885931de332ce6d8e1542aa41.jpg"
              alt="Pray for patience"
            />
          </center>
        ) : (
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
                <Label htmlFor="startDate">Start Date:</Label>
                <br />
                <DatePicker
                  minDate={new Date()}
                  name="sendDate"
                  selected={this.state.sendDate}
                  onChange={this.handleChangeDate}
                  required
                  className="form-control"
                />
              </FormGroup>

              <Button
                onClick={
                  this.state.personId
                    ? this.handleUpdatePerson
                    : this.handleAddNewPerson
                }
                className="btn btn-success"
                type="button"
              >
                {this.state.personId ? "Update" : "Create"}
              </Button>

              <Button
                type="button"
                className="btn btn-info"
                onClick={this.handleRedirect}
              >
                Return
              </Button>
            </Form>
          </div>
        )}
        <audio controls>
          <source
            src="https://drive.google.com/file/d/1ylNzQb25v6-1xxOL96NKt6cMpCCLWhaM/view"
            type="audio/mpeg"
          />
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}
export default withRouter(PersonInfo);
