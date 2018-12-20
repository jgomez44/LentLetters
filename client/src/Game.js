import React from "react";
import { withRouter } from "react-router-dom";
import { address_getAll } from "./server";

class Game extends React.Component {
  state = {
    allInfo: [],
    gameInfo: []
  };

  componentDidMount = () => {
    address_getAll()
      .then(response =>
        this.setState({ allInfo: response }, this.createNewGameArray)
      )
      .catch(error => console.error("game error===", error));
  };

  createNewGameArray = () => {
    let gameInfo = this.state.allInfo.map(info => {
      console.log("embed value===", info.embedValue.substring(7).split(">")[0]);
      return info.embedValue.substring(7).split(">")[0];
    });
    this.setState({ gameInfo }, this.printGames);
  };

  printGames = () => {
    console.log("game info===", this.state.gameInfo);

    for (let i = 0; i < this.state.gameInfo.length; i++) {
      return (
        <div>
          <embed {...this.state.gameInfo[i]} />
        </div>
      );
    }
    // let gameInfo = this.state.allInfo.map(info => {
    //   console.log(info.embedValue.substring(7).split(">")[0]);
    //   console.log(
    //     "trying this out",
    //     info.embedValue
    //       .substring(7)
    //       .info.embedValue.substring(0, info.embedValue.indexOf("></embed"))
    //   );

    //   return (
    //     <div>
    //       <h3>{info.gameTitle}</h3>
    //       <br />
    //       <div>
    //         <embed {...this.state.address[i]} />
    //       </div>
    //     </div>
    //   );
    // });
    // return gameInfo;
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
