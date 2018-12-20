import React from "react";
import { withRouter } from "react-router-dom";
import { getGames } from "./server";

class Game extends React.Component {
  state = {
    allInfo: []
  };

  componentDidMount = () => {
    getGames()
      .then(response => {
        console.log("games response===", response);
        this.setState({ allInfo: response });
      })
      .catch(error => console.error("game error===", error));
  };

  printGames = () => {
    let i = 0;
    let gameInfo = this.state.allInfo.map(info => {
      i++;
      let embed = info.embedValue.substring(info.embedValue.indexOf("src") + 5);
      let embedSrc = embed.substring(0, embed.indexOf('"'));

      return (
        <div className="games" key={i}>
          <h3 style={{ color: "white" }}>{info.gameTitle}</h3>
          <br />
          <div>
            <embed
              src={embedSrc}
              width="690"
              height="402"
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
        <center>
          <div>{printGames}</div>
        </center>
      </div>
    );
  }
}

export default withRouter(Game);
