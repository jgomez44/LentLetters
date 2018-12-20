import React from "react";
import Sound from "react-sound";
import { withRouter } from "react-router-dom";

class MyComponentWithSound extends React.Component {
  render() {
    return <Sound {...props} />; // Check props in next section
  }
}

export default withRouter(MyComponentWithSound);  
