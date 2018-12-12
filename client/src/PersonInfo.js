import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

class PersonInfo extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>First Name:</Label>
            <Input type="text" />
          </FormGroup>

          <FormGroup />

          <Button className="btn btn-success">Submit</Button>
        </Form>
      </div>
    );
  }
}
export default withRouter(PersonInfo);
