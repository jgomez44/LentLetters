import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PersonInfo extends Component {

  componentDidMount = () => {
    
  }
  render() {
    return <div>This is working</div>;
  }
}

export default withRouter(PersonInfo);
