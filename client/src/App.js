import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <NavLink to="/homepage">Home</NavLink>
            <Route exact path="/homepage" component={Homepage} />
          </>
        </BrowserRouter>
        {/* <Route exact path={prefix + "/create"} component={AddressForm} /> */}
      </>
    );
  }
}

export default App;
