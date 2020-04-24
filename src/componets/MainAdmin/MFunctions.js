import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";

function App() {
  return (
    <Router>
      <div className="">
        <MainNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
