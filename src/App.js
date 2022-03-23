import React from 'react';
import './App.css';
import Upload from './components/Upload';
import Main from './mainPage/main';
import Home from './mainPage/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SecondPage from './mainPage/secondPage';
import Test from './mainPage/test';
import SmartPage from './mainPage/smartPage';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <SmartPage />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/smart">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

//const App = () => {
//return (
//<div>
//<Upload />
//</div>
//<div>
//<Home />
//</div>
//)
//}

export default App;
