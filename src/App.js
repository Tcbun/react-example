import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import loadable from './util/loadable';

import Home from './pages/home';
import ReactTransitionGroup from './pages/react-transition-group';

const About = loadable(() => import('./pages/about'));

function App() {

  return (
    <div className="App">
      <h1>react-example</h1>
        <Router>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/reactTransitionGroup' component={ReactTransitionGroup}></Route>
        </Router>
    </div>
  );
}

export default App;
