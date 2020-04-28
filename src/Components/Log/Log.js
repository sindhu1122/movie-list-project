import React from 'react'
import { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
  MDBCardHeader, MDBCardBody
} from 'mdbreact';
//import Home from '../Home/Home'
//import Bar from '../nav/nav'
import { Link, Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import Dashboard from '../admin/admidashboard/admidashboard'
import Signup from '../../Container/Signup'
class SignIn extends Component {


  com = true
  constructor(props) {
    super(props);
    this.HandleChange = this.HandleChange.bind(this);
    this.HandlePassword = this.HandlePassword.bind(this);

    this.HandleLog = this.HandleLog.bind(this);
  }

  HandleLog = () => {
    let obj = {
      userName: this.props.username,
      password: this.props.password
    }
    this.props.onSubmit(obj);

  }
  HandleChange(event) {
    this.props.onNameChange(event.target.value)
  }
  HandlePassword(event) {
    this.props.onPasswordChange(event.target.value)
  }

  render() {
    console.log(this.props.username)
    return (
      <div className="header">
        {/* <Router> */}
        {this.props.isLoggedIn ?
          <Dashboard username={this.props.username} role={this.props.role} />
          :
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                      <h3 className="my-3">
                        <MDBIcon icon="lock" /> Login:
                </h3>
                    </MDBCardHeader>
                    <form>
                      <div className={this.props.logged ? "hide" : "show"}>

                        {/* <i class="fas fa-user prefix"></i> */}
                        <MDBInput class="form-control form-control-lg" id="ip1" type="text" label="username" onChange={(event) => this.HandleChange(event)} /><br></br>
                      </div>

                      {/* <i class="fas fa-user prefix"></i> */}
                      <MDBInput class="form-control form-control-lg" id="ip2" type="password" label="password" onChange={(event) => this.HandlePassword(event)} /><br></br>

                      <MDBBtn class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.HandleLog}>SignIn</MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/sigup"> New User?</Link>

                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        }
        {/* <Switch>
            <Route path="/sigup" exact component={Signup}></Route>
            </Switch> */}
        {/* </Router> */}
      </div>



    )
  }
}
export default SignIn;