import React from "react";
import { Home, Movies, NewComics } from '../pages'
import {
  Switch,
  Route,
} from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route path='/movies' component={Movies}/>
      <Route path='/newcomics'component={NewComics}/>
      <Route path='/' component={Home} exact/>
    </Switch>
  );
}

export default Routes;