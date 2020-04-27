import React, { Component } from 'react'
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
  MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
class Dashboard extends Component {
  render() {

    console.log(this.props.role)
    return (
      
        <div>

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
                    <Link class="nav-link waves-effect waves-light" to='/editmovie'>
                      <i class="fa fa-plus-circle"></i> Edit and Delete Movie
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
        
         
         
        </div>
      
    )
  }
}
export default Dashboard