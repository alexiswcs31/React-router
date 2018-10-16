import React, { Component } from 'react';
import { Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './Home';
import History from './History';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink><br />
          <NavLink to="/notre-histoire" activeClassName="selected">History</NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;