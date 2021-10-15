import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'
import Home from "./views/Home";
import CV from "./views/CV";
import Agenda from './views/Agenda'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/agenda">
            <Agenda />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}