import React from "react";
import { withRouter } from "react-router-dom";
import { address_getAll } from "./server";

class Game extends React.Component {
  state = {
    allInfo: []
  };

  componentDidMount = () => {
    address_getAll()
      .then(response => this.setState({ allInfo: response }))
      .catch(error => console.error("game error===", error));
  };

  printGames = () => {
    let gameInfo = this.state.allInfo.map(info => {
      let embed = info.embedValue.substring(info.embedValue.indexOf("src") + 5);
      let embedSrc = embed.substring(0, embed.indexOf('"'));
      console.log("embedSrc===", embedSrc);
      return (
        <div>
          <h3>{info.gameTitle}</h3>
          <br />
          <div>
            <embed
              src={embedSrc}
              width="800"
              height="512"
              type="application/x-shockwave-flash"
            />
          </div>
        </div>
      );
    });
    return gameInfo;
  };

  render() {
    let printGames = this.printGames();
    return (
      <div>
        {/* <embed
          width="800"
          height="512"
          base="https://external.kongregate-games.com/gamez/0021/0593/live/"
          src="https://external.kongregate-games.com/gamez/0021/0593/live/embeddable_210593.swf"
          type="application/x-shockwave-flash"
        /> */}
        <br />
        <div>{printGames}</div>
      </div>
    );
  }
}

export default withRouter(Game);
