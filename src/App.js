import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Container/Signup'
import Home from './Container/Home'
import Watchlist from './Container/Watchlist'
import Favlist from './Container/Favlist'
import Log from './Container/login'
import Movie from './Container/movie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/movie" exact component={Movie}></Route>
          <Route path="/sigup" exact component={Signup}></Route>
          <Route path="/log" exact component={Log}></Route>
          <Route path="/watchlist" exact component={Watchlist}></Route>
          <Route path="/favlist" exact component={Favlist}></Route>
          <Route path="/logout" exact component={Signup}></Route>
          <Route path="/home" exact component={Home}></Route>

        </Switch>
      </Router>

    </div>
  );
}
export default App;
