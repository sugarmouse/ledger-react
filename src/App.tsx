import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import React from 'react';
import Money from "pages/Money";
import Statistics from "pages/Statistics";
import {Tags} from "pages/Tags";
import NotMatch from "pages/NotMatch";
import styled from "styled-components";
import {EditTag} from "pages/EidtTag";

const AppWrapper = styled.div`
  color: #333;
`;


function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route path="/tags/:id">
            <EditTag/>
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
    </AppWrapper>
  );
}

export  {App};
