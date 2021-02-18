import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {List} from "./List";
import Info from "./InfoPage";

function App() {  
  return (
    <div className="app">
      <header className="appHeader">
      <h1 id="heading">MovieFlix</h1> 
      </header>
      <div className="disp">  
        <Router>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/info/:id">
              <Info />
            </Route>
          </Switch>
        </Router>
      </div>
      <div id="footer">
        <p className="dont"> for safty  </p>
        <p className="dont"> for safty  </p>
        <a href="https://codepen.io/varadhardikar"><p>By Varad Hardikar</p></a>
        <p>+91856699346</p>
    </div>
    </div>
  );
}

export default App;
