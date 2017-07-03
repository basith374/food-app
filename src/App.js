import React, { Component } from 'react';
import './App.css';
import Food from './components/Food';
import Restaurants from './components/Restaurants';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link
} from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/restaurants',
    main: () => <Restaurants />
  },
  {
    path: '/food',
    main: () => <Food />
  },
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-sidebar">
            <div className="App-sidebar-header">
              <h2>Ignitor</h2>
            </div>
            <ul>
              <li>
                <Link to="/" exact={true}>Home</Link>
              </li>
              <li>
                <Link to="/restaurants">Restaurants</Link>
              </li>
              <li>
                <Link to="/food">Food</Link>
              </li>
            </ul>
          </div>
          <div className="App-panel">
            <nav className="pt-navbar pt-dark">
              <div className="pt-navbar-group pt-align-left">
                <div className="pt-navbar-heading">Blueprint</div>
                <input className="pt-input" placeholder="Search files..." type="text" />
              </div>
              <div className="pt-navbar-group pt-align-right">
                <button className="pt-button pt-minimal pt-icon-home">Home</button>
                <button className="pt-button pt-minimal pt-icon-document">Files</button>
                <span className="pt-navbar-divider"></span>
                <button className="pt-button pt-minimal pt-icon-user"></button>
                <button className="pt-button pt-minimal pt-icon-notifications"></button>
                <button className="pt-button pt-minimal pt-icon-cog"></button>
              </div>
            </nav>
            <div className="App-content">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
