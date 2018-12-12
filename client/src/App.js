import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import PersonInfo from "./PersonInfo";

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <NavLink to="/homepage">Home</NavLink>
            <NavLink to="/create">Add Address</NavLink>

            <Route exact path="/homepage" component={Homepage} />
            <Route exact path="/create" component={PersonInfo} />
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
