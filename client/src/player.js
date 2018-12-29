import React from "react";
import Sound from "react-sound";
import { withRouter } from "react-router-dom";
import soundFile from "./CanonInD.mp3";

class Player extends React.Component {
  render() {
    return <Sound url={soundFile} playStatus={Sound.status.PLAYING} />;
  }
}

export default withRouter(Player);
