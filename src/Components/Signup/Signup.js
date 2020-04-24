import React from 'react'
import { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
  MDBCardHeader, MDBCardBody
} from 'mdbreact';
//import Home from '../Home/Home'
//import Bar from '../nav/nav'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import './signup.css'
class Signup extends Component {
  log = false
  com = true
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // today:[{
      //     date:[],tasks:[],endTime:[],dur:[],
      // startTime:[]}],
      submit: false
    }
    this.HandleChange = this.HandleChange.bind(this);
    this.HandlePassword = this.HandlePassword.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);

  }
  HandleSubmit = async () => {
    let obj = {
    }
    console.log(this.props.username)
    if (this.props.username != '' && this.props.password != '') {
      if (this.props.role == 'user') {
        obj = {
          userName: this.props.username,
          password: this.props.password,
          email: this.props.email,
          role: this.props.role,

        }
      }
      else {
        obj = {
          userName: this.props.username,
          password: this.props.password,
          email: this.props.email,
          role: this.props.role,

        }

      }
      // await this.props.getItem();
      // if (!this.props.data) {
      //   this.props.setItem(obj)
      // }
      //this.setState({ submit: true })
      this.props.setItem(obj)
    }
    else {
      this.props.onSubmit()
    }
  }

  HandleChange(event) {
    this.props.onNameChange(event.target.value)
  }
  HandlePassword(event) {
    this.props.onPasswordChange(event.target.value)
  }
  handleEmail = (e) => {
    this.props.setEmail(e.target.value);
  }
  handleRole = (e) => {
    this.props.setRole(e.target.value);
  }

  render() {
    return (
      <div className="header">
        {this.state.submit ? null
          :
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                      <h3 className="my-3">
                        <MDBIcon icon="lock" /> Signup
                </h3>
                    </MDBCardHeader>
                    <form>

                      <div className={this.log ? "hide" : "show"}>


                        <MDBInput class="form-control form-control-lg" id="ip1" type="text" label="username" onChange={(event) => this.HandleChange(event)} /><br></br>
                      </div>


                      <MDBInput class="form-control form-control-lg" id="ip2" type="password" label="password" onChange={(event) => this.HandlePassword(event)} /><br></br>
                      <MDBInput class="form-control form-control-lg" id="ip3" type="email" label="email" onChange={(event) => this.handleEmail(event)} /><br></br>
                      <select onChange={this.handleRole} value={this.props.role} ><br></br><br></br>
                        <option value="admin">Admin</option><br></br><br></br>
                        <option value="user">User</option>
                      </select><br></br><br></br>
                      <MDBBtn class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.HandleSubmit}>signup</MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to="/log">Existing User?</Link>

                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        }
      </div>



    )
  }
}


export default Signup;