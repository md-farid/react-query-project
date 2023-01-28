import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import SuperHeroes from './components/pages/SuperHeroes';
import RQSuperHeroes from './components/pages/RQSuperHeroes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/super-heroes">
          <SuperHeroes />
        </Route>
        <Route path="/rq-super-heroes">
          <RQSuperHeroes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
