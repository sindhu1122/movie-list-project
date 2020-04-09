import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup'
import Home from './Container/Home'
import Log from './Components/Log/Log'
import Movie from './Components/movie/movie'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
      {/* <Router>
        <Switch>
        <Route  path="/" exact component={Home}></Route>
<Route path="/sigup" exact component={Signup}></Route>
<Route path="/log" exact component={Log}></Route>
<Route path="/movie" exact component={Movie}></Route> 
<Route path="/movie"  component={Movie}></Route>
</Switch>
     </Router>  */}
     <Home/>
    </div>
  );
}
export default App;
