import React from "react";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const App = () =>
  <Router>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  </Router>

export default App;

