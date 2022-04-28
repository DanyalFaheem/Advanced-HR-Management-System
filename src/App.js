import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignIn from "./components/sign";
import Reg from "./components/reg";

import Header from "./components/header";
import Home from "./components/home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/sign-up">
            <SignIn />
          </Route>
          <Route exact path="/register">
            <Reg/>
          </Route>
          <Route path="/home">
            
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;