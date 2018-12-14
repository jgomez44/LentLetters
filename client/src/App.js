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

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <NavLink to="/homepage">Home &nbsp;</NavLink>
            <NavLink to="/create">Add Address &nbsp;</NavLink>
            <Switch>
              <Route exact path="/homepage" component={Homepage} />
              <Route exact path="/create" component={PersonInfo} />
              <Route
                exact
                path="/edit/:addressId(\\d+)"
                component={PersonInfo}
              />
              <Redirect to="/homepage" component={Homepage} />
            </Switch>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
