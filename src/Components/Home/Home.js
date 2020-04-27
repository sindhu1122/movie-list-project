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
    c: 1
  }

  componentDidMount() {
    this.props.movielist()
  }
  handleMovie = (event) => {
    this.setState({ display: false, toggle: false })
    this.props.onMovieChange(event.target.value)
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
    let array = currentTodos.map((obj, key) => {
      return <Col span={8}><Card style={{ width: 500, marginTop: 16 }} title={currentTodos[key].movieName} extra={<Link to={{ pathname: `/movie`, state: { currentmovie: currentTodos[key].movieName } }}>More..</Link>}>

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
      
        <div className="site-card3" style={{ overflowY: 'scroll' }}>
          <Row gutter={16}>
            {array}
          </Row>
        </div>

        <footer class="page-footer font-small lightblue" class="bottom" >


          <nav aria-label="Page navigation example">
            <ul class="pagination pg-blue" class="pagination pg-blue justify-content-center" id="page-numbers">

              <li className="page-item">
                <button className="page-link" onClick={() => { if (this.state.currentPage > 1) { this.setState({ currentPage: this.state.currentPage - 1, c: 1 }) } }} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>

              {renderPageNumbers}

              <li className="page-item">
                <button className="page-link" onClick={() => { if (this.state.currentPage < pageNumbers.length) { this.setState({ currentPage: this.state.currentPage + 1, c: 6 }) } }} aria-label="Next">
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