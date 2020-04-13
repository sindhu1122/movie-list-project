import React, { Component } from 'react'
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
  MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import Home from '../../../Container/Home'
import { connect } from "react-redux";
import Addmovie from '../../../Container/addmovie'
import Adddirector from '../../../Container/adddirector'
import Addactor from '../../../Container/addActor'
import AddProducer from '../../../Container/addProducer'
import AddActress from '../../../Container/addActress'
import Signup from '../../../Container/Signup'
class Dashboard extends Component {
  render() {

    console.log(this.props.role)
    return (
      <Router>
        <div>

          {this.props.role === "admin" ?
            <div className="header">


              <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">

                <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                  <Link to="/home" onClick={() => { this.setState({ display: false, toggle: false }) }}>
                    Home
            </Link>
                </div>
                <ul class="navbar-nav ml-auto nav-flex-icons">

                  <li class="nav-item">
                    <Link class="nav-link waves-effect waves-light" to='/addmovie'>
                      <i class="fa fa-plus-circle"></i> Movie
                </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect waves-light" to='/actor'>
                      <i class="fa fa-plus-circle"></i>Actor
                </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect waves-light" to='/actress'>
                      <i class="fa fa-plus-circle"></i>Actress
                </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect waves-light" to='/producer'>
                      <i class="fa fa-plus-circle"></i>Producer
                </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect waves-light" to='/director'>
                      <i class="fa fa-plus-circle"></i>Director
                </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link waves-effect waves-light" to='/logout'>
                      <i class="fa fa-user"></i>Logout
                </Link>
                  </li>


                </ul>

              </nav>

            </div>
            : <Home />}
          <Switch>
            <Route path="/addmovie" exact component={Addmovie}></Route>
            <Route path="/director" exact component={Adddirector}></Route>
            <Route path="/actor" exact component={Addactor}></Route>
            <Route path="/producer" exact component={AddProducer}></Route>
            <Route path="/actress" exact component={AddActress}></Route>
            <Redirect to="/logout" component={Signup} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Dashboard