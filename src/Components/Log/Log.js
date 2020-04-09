import React from 'react'
import { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBIcon,
    MDBCardHeader, MDBCardBody } from 'mdbreact';
    //import Home from '../Home/Home'
//import Bar from '../nav/nav'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import Dashboard from '../admidashboard/admidashboard'
class SignIn extends Component
{
   
    
    com=true
    constructor(props) {
        super(props);
        this.HandleChange = this.HandleChange.bind(this);
        this.HandlePassword = this.HandlePassword.bind(this);
        
        this.HandleLog=this.HandleLog.bind(this);
      } 
      
      HandleLog= async () => {
      
        await  this.props.onSubmit();    
         
    }
      HandleChange(event)
      {
          this.props.onNameChange(event.target.value)
      }
      HandlePassword(event)
      {
        this.props.onPasswordChange(event.target.value)
      }
    //   handleLogout = (e) => {
         
    //       console.log(this.com)
    //       //this.log=!this.log;
    //       this.setState({
    //       username:'',
    //       password:'',
    //       submit:false
    //       })
          
    //       console.log(this.state)
    //       this.com=!this.com
    //       console.log(this.com)
          
    //   }
      render()
      {
          console.log(this.props.username)
    return(
        <div className="header">
            {this.props.submit?<Dashboard username={this.props.username} submit={this.props.log}/>
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
             <div className={this.props.log?"hide":"show"}>
             
                {/* <i class="fas fa-user prefix"></i> */}
                <MDBInput class="form-control form-control-lg" id="ip1" type="text" label="username" onChange={(event)=>this.HandleChange(event)}/><br></br>
            </div>
            
                {/* <i class="fas fa-user prefix"></i> */}
            <MDBInput class="form-control form-control-lg" id="ip2" type="password" label="password" onChange={(event)=>this.HandlePassword(event)}/><br></br>
            
            <MDBBtn class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.HandleLog}>SignIn</MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
            
            
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
export default SignIn;