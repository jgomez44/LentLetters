import React from "react";
import { withRouter } from "react-router-dom";

class Game extends React.Component {
  render() {
    return (
      <div>
        <embed
          width="800"
          height="512"
          base="https://external.kongregate-games.com/gamez/0021/0593/live/"
          src="https://external.kongregate-games.com/gamez/0021/0593/live/embeddable_210593.swf"
          type="application/x-shockwave-flash"
        />
        <br />
      </div>
    );
  }
}

export default withRouter(Game);
