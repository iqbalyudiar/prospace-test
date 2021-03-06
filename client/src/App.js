import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OverviewPage from "./components/Pages/OverviewPage";
import OfficePage from "./components/Pages/OfficePage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={OverviewPage} />
          <Route path="/forms/company/:company" exact component={OfficePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
