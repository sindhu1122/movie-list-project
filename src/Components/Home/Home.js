import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";
import Side from '../Side/Side'
import { connect } from 'react-redux'
import { Card, Col, Row } from 'antd';
import Movie from '../../Container/movie';
import Log from '../../Container/login'
import Favlist from '../../Container/Favlist'
import Watchlist from '../../Container/Watchlist'
//const {Meta}=Card
import Signup from '../../Container/Signup'

import './Home.css'

const { Meta } = Card;

class Home extends React.Component {
  state = {

    currentPage: 1,
    todosPerPage: 3,
    toggle:false,
    display:false
  }

   handleMovie=(event)=>
  {
    this.setState({display:true,toggle:false})
    this.props.onMovieChange(event.target.value)
  }
  enterPressed= async(e)=>{
    var code=e.keycode||e.which;
    if(code==13)
    {
      await this.props.movieSearch()
    }
  }
  moviedetails= async(obj)=>{
     console.log(this.props.display)
     this.setState({display:true,toggle:false})
     await this.props.display1(obj)
  }
  toggle=()=>{
    this.setState({toggle:true})

}
favList= async ()=>{
  this.setState({display:true,toggle:false})
  await this.props.favLists(this.props.username)
}
watchlist= async ()=>{
  this.setState({display:true,toggle:false})
  if(!this.props.submit)
  {
      alert("please logi to see details")
  }
  else{
  await this.props.watchLists(this.props.username)}
}
  render() {
    let movie;
   
    if(this.props.chage)
     movie = this.props.movie1
    else
     movie = this.props.movie
   
    const { currentPage, todosPerPage } = this.state;
    let currentTodos
    // Logic for displaying movies
    if(movie.length>todosPerPage){
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
     currentTodos = movie.slice(indexOfFirstTodo, indexOfLastTodo);}
      else{
        currentTodos=movie
      }
    // // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movie.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, i) => {
      return (
        number >= this.state.currentPage &&
          number < this.state.currentPage + 5 ?
          <li class="page-item"
            key={number}
            id={number}
            tabIndex={i}
            onClick={this.handleClick}
          >
            {number}
          </li> : null
      );
    });
    let array = currentTodos.map(obj => {


      return <Col span={8}><Card style={{ width: 300, marginTop: 16 }} title={obj} extra={<Link to="/movie" onClick={()=>{this.moviedetails(obj)}}>More</Link>}>
        return
                <Meta

          description={[
            <div>
              <p>"www.instagram.com"</p>&nbsp;&nbsp;&nbsp;
            <p> additional content</p>
            </div>
          ]}
        />
      </Card></Col>
    })
    return (
      
      <div >

        <Router>
          {!this.state.toggle?
        <div className="header">
        <Menu >
          <Link to="/filters">Filters</Link>
          <Link to="/list actors">List</Link>
        </Menu>
      
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">

          <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <Link to="/home" onClick={()=>{this.setState({display:false,toggle:false})}}>
              Home
            </Link>

            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item">
                <div class="md-form my-0">
                  <input 
                  class="form-control mr-lg-2" 
                  type="text" 
                  placeholder="Search" 
                  aria-label="Search" 
                  onChange={this.handleMovie}
                  onKeyPress={this.enterPressed}/>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link waves-effect waves-light" onClick={this.watchlist} to='/watchlist'>
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
                  <Link class="nav-link waves-effect waves-light" to="/logout">
                    Logout
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
          {console.log(this.props.display)}
          {!this.state.display?
          <div>
          <div className="site-card3" style={{ overflowY: 'scroll' }}>
            <Row gutter={16}>
              {array}
            </Row>
          </div>

          <footer class="page-footer font-small lightblue" class="fixed-bottom" >


            <nav aria-label="Page navigation example">
              <ul class="pagination pg-blue" class="pagination pg-blue justify-content-center" id="page-numbers">

                <li className="page-item">
                  <button className="page-link" onClick={() => { this.setState({ currentPage: this.state.currentPage - 1 }) }} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </li>

                {renderPageNumbers}

                <li className="page-item">
                  <button className="page-link" onClick={() => { this.setState({ currentPage: this.state.currentPage + 1 }) }} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </button>
                </li>

              </ul>
            </nav>


          </footer></div>: <Switch><Route path="/home" exact component={Side}></Route>
         <Route path="/movie" exact component={Movie}></Route>
         <Route path="/sigup" exact component={Signup}></Route>
         <Route path="/log" exact component={Log}></Route>
         {this.props.submit?
         <Switch>
         <Route path="/watchlist" exact component={Watchlist}></Route>
         <Route path="/favlist" exact component={Favlist}></Route></Switch>:
         <Redirect to="/sigup"/>}
         
         </Switch>
           
           
  }
        </div>:<Switch>
         <Route path="/sigup" exact component={Signup}></Route>
         <Route path="/log" exact component={Log}></Route>
         
         </Switch>}
        
        </Router>
      </div>

    );
          }
};
export default Home