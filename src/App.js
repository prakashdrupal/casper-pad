import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import About from "./screens/About";

import "./assets/styles.css";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
