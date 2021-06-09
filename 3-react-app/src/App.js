import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./1-home/Home";
import User from "./2-form/User";
import Todos from "./3-context/Todos";

function App() {
  return (
    <div className="App App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
