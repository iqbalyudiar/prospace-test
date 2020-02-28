import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OverviewPage from "./components/Pages/OverviewPage";
import OfficePage from "./components/Pages/OfficePage";
// import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={OverviewPage} />
          <Route path="/list/office" exact component={OfficePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
