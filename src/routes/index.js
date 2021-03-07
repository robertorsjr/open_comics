import React from "react";
import Home from '../pages/Home'
import {
  Switch,
  Route,
} from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route path='/movies'/>
      <Route path='/newcomics'/>
      <Route path='/' component={Home}/>
    </Switch>
  );
}

export default Routes;