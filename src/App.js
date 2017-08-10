import React, { Component } from 'react';
import './App.css';
import Food from './components/Food';
import Restaurants from './components/Restaurants';
import RestaurantForm from './components/RestaurantForm';
import FoodForm from './components/FoodForm';
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
    exact: true,
    main: () => <Restaurants />
  },
  {
    path: '/restaurants/create',
    main: () => <RestaurantForm />
  },
  {
    path: '/food/create',
    main: () => <FoodForm />
  },
  {
    path: '/food',
    exact: true,
    main: () => <Food />
  },
]

class App extends Component {
  state = {
    sidebarHeight: '100%'
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.updateDimensions();
  }
  updateDimensions() {
    const sidebarHeight = window.outerHeight;
    this.setState({sidebarHeight});
  }
  render() {
    const {sidebarHeight} = this.state;
    return (
      <Router>
        <div className="App">
          <div className="App-sidebar">
            <div className="App-sidebar-header">
              <h2>Ignitor</h2>
            </div>
            <ul>
              <li>
                <Link to="/" exact={true}><span className="pt-icon-standard pt-icon-home"></span>&nbsp;&nbsp;Home</Link>
              </li>
              <li>
                <Link to="/restaurants"><span className="pt-icon-standard pt-icon-shop"></span>&nbsp;&nbsp;Restaurants</Link>
              </li>
              <li>
                <Link to="/food"><span className="pt-icon-standard pt-icon-glass"></span>&nbsp;&nbsp;Food</Link>
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
