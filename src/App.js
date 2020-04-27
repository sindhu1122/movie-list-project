import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Container/Signup'
import Home from './Container/Home'
import Watchlist from './Container/Watchlist'
import Favlist from './Container/Favlist'
import Log from './Container/login'
import Movie from './Container/movie'
import Filter from './Container/Filter'
import Listfilter from './Container/listActors'
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
          <Route path="/watchlist"  component={Watchlist}></Route>
          <Route path="/favlist"  component={Favlist}></Route>
          <Route path="/logout" exact component={Signup}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/filters" exact component={Filter}></Route>
          <Route path="/actorfilters" exact component={Listfilter}></Route>

        </Switch>
      </Router>

    </div>
  );
}
export default App;
