import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";
import FormTemplate from "./templates/FormTemplate";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/form" component={FormTemplate} />
        <Route path="/" component={PageTemplate} />
      </Switch>
    </Router>
  );
};

export default App;
