import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Filter from '../Filter/Filter'
import Side from '../../Container/Side'
import { connect } from 'react-redux'
import { Card, Col, Row } from 'antd';

//const {Meta}=Card
import Signup from '../../Container/Signup'
import Listactors from '../../Components/Listactors/Listactors'

import './Home.css'
const { Meta } = Card;

class Home extends React.Component {
  state = {

    currentPage: 1,
    todosPerPage: 6,
    toggle: false,
    display: false,
    c:1
  }

  componentDidMount=()=>{
    this.props.movielist()
  }
  handleMovie = (event) => {
    this.setState({ display: false, toggle: false })
    this.props.onMovieChange(event.target.value)
  }
  moviedetails = (obj) => {
    console.log(this.props.display)
    // this.setState({ display: true, toggle: false })
    this.props.display1(obj)
  }
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    let movie;
    console.log(this.props.movie1)
    console.log(this.props.chage)
    console.log(this.props.movie)
    if (this.props.chage)
      movie = this.props.movie1
    else
      movie = this.props.movie

    const currentPage = this.state.currentPage
    const todosPerPage = this.state.todosPerPage;
    let currentTodos
    // Logic for displaying movies
    if (movie.length > todosPerPage) {
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      currentTodos = movie.slice(indexOfFirstTodo, indexOfLastTodo);
      console.log(currentTodos)
    }
    else {
      currentTodos = movie
    }
    // // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movie.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, i) => {
      return (
        number >= this.state.c &&
          number < this.state.c + 5 ?
          <li class="page-item"
            key={number}
            id={number}
            onClick={(e) => { this.handleClick(e) }}
          >
            {number}
          </li> : null
      );
    });
    let array = currentTodos.map((obj,key) => {
      return <Col span={8}><Card style={{ width: 500, marginTop: 16 }} title={currentTodos[key].movieName} extra={<Link to="/movie" onClick={() => { this.moviedetails(currentTodos[key].movieName) }}>More</Link>}>
        
                <Meta

          description={[
            <div>
              <img
                            alt="poster not found"
                            src={currentTodos[key].imgURL}
                        />
            </div>
          ]}
        />
      </Card></Col>

    })
    console.log(array)
    return (

      <div >

        <Side />
        {/* {
            // <div className="header">
            //   <Menu >
            //     <Filter />
            //     <Listactors/>
            //   </Menu>

            //   <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">

            //     <div class="collapse navbar-collapse" id="navbarNav">
            //       <ul class="navbar-nav mr-auto">
            //         <li class="nav-item active">
            //           <Link class="nav-link waves-effect waves-light" to="/home" onClick={() => { this.setState({ display: false, toggle: false }) }}>
            //             <i class="fas fa-home"></i>Home
            // </Link>
            //         </li>
            //       </ul>

            //       <ul class="navbar-nav ml-auto nav-flex-icons">
            //         <li class="nav-item">
            //           <div class="md-form my-0">
            //             <input
            //               class="form-control mr-lg-2"
            //               type="text"
            //               placeholder="Search"
            //               aria-label="Search"
            //               onChange={this.handleMovie}
            //               onKeyPress={this.enterPressed} />
            //           </div>
            //         </li>

            //         <li class="nav-item">
            //           <Link class="nav-link waves-effect waves-light" onClick={this.watchlist} to='/watchlist'>
            //             <i class="fa fa-plus-circle"></i>Watch list
            //     </Link>
            //         </li>
            //         <li class="nav-item">
            //           <Link class="nav-link waves-effect waves-light" onClick={this.favList} to='/favlist'>
            //             <i class="fa fa-heart"></i>Favourites
            //      </Link>
            //         </li>
            //         {this.props.submit ?
            //           <li class="nav-item">
            //             <Link class="nav-link waves-effect waves-light" onClick={this.props.logout} to="/logout">
            //               <i class="fa fa-profile"></i> Logout
            //       </Link>
            //           </li> :
            //           <li class="nav-item">
            //             <Link class="nav-link waves-effect waves-light" onClick={this.toggle} to="/sigup">
            //               Signup
            //        </Link>
            //           </li>}

            //       </ul>
            //     </div>
            //   </nav>
              // {console.log(this.props.display)}
              // {!this.state.display ?
                <div> */}
        <div className="site-card3" style={{ overflowY: 'scroll' }}>
          <Row gutter={16}>
            {array}
          </Row>
        </div>

        <footer class="page-footer font-small lightblue" class="bottom" >


          <nav aria-label="Page navigation example">
            <ul class="pagination pg-blue" class="pagination pg-blue justify-content-center" id="page-numbers">

              <li className="page-item">
                <button className="page-link" onClick={() => { if (this.state.currentPage > 1) { this.setState({ currentPage: this.state.currentPage - 1 ,c:1}) } }} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>

              {renderPageNumbers}

              <li className="page-item">
                <button className="page-link" onClick={() => { if (this.state.currentPage < pageNumbers.length) { this.setState({ currentPage: this.state.currentPage + 1 ,c:6}) } }} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>

            </ul>
          </nav>


        </footer>
      </div>


    );
  }
};

export default Home;