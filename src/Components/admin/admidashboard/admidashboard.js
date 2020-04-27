import React, { Component } from 'react'
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
  MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import Home from '../../../Container/Home'
import Dash from '../dashboard'
class Dashboard extends Component {
  render() {

    console.log(this.props.role)
    return (

      <div>
        {this.props.role === "admin" ?
          <Dash />
          : <Home />}


      </div>

    )
  }
}
export default Dashboard