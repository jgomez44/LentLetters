import React, { Component } from "react";
import "./App.css";
import {
  Route,
  NavLink,
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";
import Homepage from "./Homepage";
import PersonInfo from "./PersonInfo";
import Game from "./Game";
import { Navbar } from "reactstrap";

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Navbar color="dark" light expand="md">
              <NavLink to="/homepage" style={{ color: "white" }}>
                Home
              </NavLink>
              &nbsp;
              <NavLink to="/create" style={{ color: "white" }}>
                Add Address
              </NavLink>
              &nbsp;
              <NavLink to="/game" style={{ color: "white" }}>
                Game
              </NavLink>
            </Navbar>
            <Switch>
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path="/create" component={PersonInfo} />
              <Route
                exact
                path={"/edit/:personId(\\d+)"}
                component={PersonInfo}
              />
              <Route exact path={"/game"} component={Game} />
              <Redirect to="/homepage" component={Homepage} />
            </Switch>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
