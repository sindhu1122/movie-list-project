import React, { Component } from 'react'
import {
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
  MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
 import Home from '../../../Container/Home'
// import { connect } from "react-redux";
// import Addmovie from '../../../Container/addmovie'
// import Adddirector from '../../../Container/adddirector'
// import Addactor from '../../../Container/addActor'
// import AddProducer from '../../../Container/addProducer'
// import AddActress from '../../../Container/addActress'
// import Signup from '../../../Container/Signup'
// import EditMovie from '../../../Container/editMovie'
import Dash from '../dashboard'
class Dashboard extends Component {
  render() {

    console.log(this.props.role)
    return (
      
        <div>
        
          {/* {console.log(this.props.location.state.role)} */}
          {this.props.role === "admin" ?
            <Dash/>
           
            : <Home />}
          {/* <Switch>
            <Route path="/addmovie" exact component={Addmovie}></Route>
            <Route path="/director" exact component={Adddirector}></Route>
            <Route path="/actor" exact component={Addactor}></Route>
            <Route path="/producer" exact component={AddProducer}></Route>
            <Route path="/actress" exact component={AddActress}></Route>
            <Route path="/editmovie" exact component={EditMovie}></Route>
            {/* <Redirect to="/logout" component={Signup} /> */}
          {/* </Switch> */} */}
         
        </div>
      
    )
  }
}
export default Dashboard