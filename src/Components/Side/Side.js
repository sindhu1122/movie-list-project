import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Link,
    Redirect
} from "react-router-dom";
import jwt from 'jsonwebtoken'
import './Side.css'
import { connect } from 'react-redux'
import Favlist from '../Favlist/Favlist'
import Filter from '../../Container/Filter'
import Listactors from '../../Container/listActors'
class Side extends Component {
    state={
        dis:false
    }
    componentDidMount(){
    this.forceUpdate()

    }
    handleMovie = (event) => {
        this.props.onMovieChange(event.target.value)
    }
    enterPressed = async (e) => {
        this.setState({ display: false })
        var code = e.keycode || e.which;
        if (code == 13) {
            await this.props.movieSearch(this.props.moviecha)
        }
    }

    //   toggle = () => {
    //     this.setState({ toggle: true })

    //   }
    favList = (user) => {
        //this.history.push("/favlist")
        //this.setState({ display: true, toggle: false })
        if (!this.props.submit) {
            alert("please login to add favourite lists")
        }
        this.props.favLists(user)
    }
    // watchlist = (user) => {
    //      this.setState({ dis: true })
    //     if (!this.props.submit) {
    //         alert("please login to add watchlists")
    //     }
    //     else {
    //         this.props.watchLists(user)

    //     }
    // }
    render() {
        const token = localStorage.getItem("token")
    
        const payload = jwt.decode(token)
        console.log(this.props.username)
        return (

            <div className="header">
                <Menu >
                   <Link to="/filters">Filters</Link>
                    <Link to="/actorfilters">List Actors</Link>
                </Menu>

                <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link waves-effect waves-light" to="/home" onClick={this.props.toggle}>
                                    <i class="fas fa-home"></i>Home
                                </Link>
                            </li>
                        </ul>
                        

                        <ul class="navbar-nav ml-auto nav-flex-icons">
                            <li class="nav-item">
                                <div class="md-form my-0">
                                    <input
                                        class="form-control mr-lg-2"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                        onChange={this.handleMovie}
                                        onKeyPress={this.enterPressed} />
                                </div>
                            </li>

                            {/* <li class="nav-item">
                                <Link class="nav-link waves-effect waves-light" onClick={()=>this.watchlist(payload.userName)} to="/watchlist">
                                    <i class="fa fa-plus-circle"></i>Watch list
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link waves-effect waves-light" onClick={()=>this.favList(payload.userName)} to='/favlist'>
                                    <i class="fa fa-heart"></i>Favourites
                                </Link>
                            </li> */}
                            {console.log(this.props.submit)}
                            {this.props.submit ?
                            
                             <ul class="navbar-nav ml-auto nav-flex-icons">
                                
                                 <li class="nav-item">
                                 <Link class="nav-link waves-effect waves-light"  to='/watchlist' >
                                 
                                     <i class="fa fa-plus-circle"></i>Watch list
                                 </Link>
                                 
                             </li>
                             <li class="nav-item">
                                 <Link class="nav-link waves-effect waves-light" onClick={()=>this.favList(payload.userName)} to='/favlist'>
                                     <i class="fa fa-heart"></i>Favourites
                                 </Link>
                             </li>
                                <li class="nav-item">
                                    <Link class="nav-link waves-effect waves-light" onClick={this.props.logout} to="/logout">
                                        <i class="fa fa-profile"></i> Logout
                                    </Link>
                                </li> </ul>:
                                 <ul class="navbar-nav ml-auto nav-flex-icons">
                                     <li class="nav-item">
                                <Link class="nav-link waves-effect waves-light"  to="/sigup">
                                    <i class="fa fa-plus-circle"></i>Watch list
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link waves-effect waves-light"  to='/sigup'>
                                    <i class="fa fa-heart"></i>Favourites
                                </Link>
                            </li>
                                <li class="nav-item">
                                    <Link class="nav-link waves-effect waves-light" onClick={this.toggle} to="/sigup">
                                        Signup
                                    </Link>
                                </li></ul>}

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Side