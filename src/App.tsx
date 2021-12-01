import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import React from 'react';
import Money from "pages/Money";
import Statistics from "pages/Statistics";
import Tag from "pages/Tag";
import NotMatch from "pages/NotMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tag/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
