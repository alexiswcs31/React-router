import React, { Component } from 'react';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import History from './History';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/notre-histoire">History</NavLink>
            </li>
          </ul>
        </div>
        <div className="App-mess">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;