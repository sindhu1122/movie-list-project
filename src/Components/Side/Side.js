import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Link,
    Redirect
} from "react-router-dom";
import './Side.css'
import { connect } from 'react-redux'
import Favlist from '../Favlist/Favlist'
import Filter from '../Filter/Filter'
import Listactors from '../Listactors/Listactors'
class Side extends Component {

    handleMovie = (event) => {
        this.props.onMovieChange(event.target.value)
    }
    enterPressed = async (e) => {
        this.setState({ display: false })
        var code = e.keycode || e.which;
        if (code == 13) {
            await this.props.movieSearch()
        }
    }

    //   toggle = () => {
    //     this.setState({ toggle: true })

    //   }
    favList = () => {
        //this.setState({ display: true, toggle: false })
        this.props.favLists(this.props.username)
    }
    watchlist = () => {
        // this.setState({ display: true, toggle: false })
        if (!this.props.submit) {
            alert("please logi to see details")
        }
        else {
            this.props.watchLists(this.props.username)

        }
    }
    render() {
        console.log(this.props.username)
        return (

            <div className="header">
                <Menu >
                    <Filter />
                    <Listactors />
                </Menu>

                <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link waves-effect waves-light" to="/home">
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

                            <li class="nav-item">
                                <Link class="nav-link waves-effect waves-light" onClick={this.watchlist} to="/watchlist">
                                    <i class="fa fa-plus-circle"></i>Watch list
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link waves-effect waves-light" onClick={this.favList} to='/favlist'>
                                    <i class="fa fa-heart"></i>Favourites
                                </Link>
                            </li>
                            {this.props.submit ?
                                <li class="nav-item">
                                    <Link class="nav-link waves-effect waves-light" onClick={this.props.logout} to="/logout">
                                        <i class="fa fa-profile"></i> Logout
                                    </Link>
                                </li> :
                                <li class="nav-item">
                                    <Link class="nav-link waves-effect waves-light" onClick={this.toggle} to="/sigup">
                                        Signup
                                    </Link>
                                </li>}

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Side