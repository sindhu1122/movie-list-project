import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBIcon,
    MDBCardHeader, MDBCardBody } from 'mdbreact';
import {Link} from 'react-router-dom'
import Home from '../../Container/Home'
import { connect } from "react-redux";
class Dashboard extends Component{
    render()
    {
        console.log(this.props.username)
        return(
            <div>
            {this.props.username==="admin"?
        <div>
                <MDBInput class="form-control form-control-lg" id="ip1" type="text" label="username" onChange={(event)=>this.HandleChange(event)}/><br></br>
            
            
               
            <MDBInput class="form-control form-control-lg" id="ip2" type="password" label="password" onChange={(event)=>this.HandlePassword(event)}/><br></br>
            <MDBInput class="form-control form-control-lg" id="ip3" type="email" label="email" onChange={(event)=>this.handleEmail(event)}/><br></br>
            <select onChange={this.handleRole} value={this.props.role} ><br></br><br></br>
                                <option value="admin">Admin</option><br></br><br></br>
                                <option value="user">User</option>
                            </select><br></br><br></br>
            <MDBBtn class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.HandleSubmit}>signup</MDBBtn>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>:<Home/>}

        </div>
        )
    }
}
export default connect()(Dashboard)