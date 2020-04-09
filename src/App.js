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
    
      <Router>
        <Switch>
        <Route  path="/" exact component={Home}></Route>

</Switch>
     </Router> 
    
    </div>
  );
}
export default App;
