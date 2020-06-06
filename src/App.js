import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import PeopleList from "./pages/PeopleList";
import PeopleDetailsPage from "./pages/PeopleDetailsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PeopleList} />
        <Route exact path="/people/:id" component={PeopleDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
