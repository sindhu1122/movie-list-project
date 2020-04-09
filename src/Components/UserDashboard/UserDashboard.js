import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Signup from '../Signup/Signup'
 import {connect} from 'react-redux'
  import { Card, Col, Row } from 'antd';
  //const {Meta}=Card
 
  import './UserDashboard.css'

  const { Meta } = Card;
  let prev  = 0;
    let next  = 0;
    let last  = 0;
    let first = 0;
  class Home extends React.Component {
      state={
         
        currentPage: 1,
      todosPerPage: 3
      }
   
      handleClick=(event) =>{
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      handleLastClick(event) {
        event.preventDefault();
        this.setState({
          currentPage:last
        });
      }
      handleFirstClick(event) {
        event.preventDefault();
        this.setState({
          currentPage:1
        });
      }
    render() {
        const movie=this.props.movie
        const {  currentPage, todosPerPage } = this.state;

   // Logic for displaying movies
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = movie.slice(indexOfFirstTodo, indexOfLastTodo);
   
    // // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movie.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number ,i)=> {
      return (
        number>=this.state.currentPage &&
         number<this.state.currentPage+5?
        <li class="page-item"
          key={number}
          id={number}
          tabIndex={i}
          onClick={this.handleClick}
        >
          {number}
        </li>:null
      );
    });
    let array = currentTodos.map(obj => {
    
        
        return <Col span={8}><Card  style={{ width: 300,marginTop: 16 }} title={obj} extra={<a href="#">More</a>}>
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
                <div className="header">
                <Menu >
                     <Link to="/act=ivities">Activities</Link>
                    <Link to="/report">Report</Link> 
                </Menu>
    
<nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  {/* <Menu >
                     <Link to="/activities">Activities</Link>
                    <Link to="/report">Report</Link> 
                </Menu> */}
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
  
    <ul class="navbar-nav ml-auto nav-flex-icons">
    <li class="nav-item">
      <div class="md-form my-0">
      <input class="form-control mr-lg-2" type="text" placeholder="Search" aria-label="Search"/>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link waves-effect waves-light">
          <i class="fa fa-plus-circle"></i>Watch list
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link waves-effect waves-light">
          <i class="fa fa-heart"></i>Favourites
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link waves-effect waves-light">
          <i class="fa fa-user"></i><select onChange={this.handleRole} value={this.props.role} ><br></br><br></br>
                                <option value="admin">Admin</option><br></br><br></br>
                                <option value="user">User</option>
                            </select>
        </Link>
      </li>
      
    </ul>
  </div>
</nav>
<div className="site-card3" style={{overflowY: 'scroll'}}>
                <Row gutter={16}>
                    {array}
                    </Row>
                </div>
               
<footer class="page-footer font-small lightblue" class="fixed-bottom" >

  
<nav aria-label="Page navigation example">
  <ul class="pagination pg-blue" class="pagination pg-blue justify-content-center" id="page-numbers">
  
                            <li className="page-item">
                                <button className="page-link" onClick={()=>{this.setState({currentPage:this.state.currentPage-1}) }} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </button>
                            </li>
                      
   {renderPageNumbers}
    
                            <li className="page-item">
                                <button className="page-link" onClick={()=>{this.setState({currentPage:this.state.currentPage+1}) }} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </li>
                      
  </ul>
</nav>
  

</footer>
                {/* <Switch>
                    <Route path="/sigup">
                        <Signup/>
                    </Route> */}
                    {/* <Route path="/report">
                        <Reports username={this.props.username} />
                    </Route> */}
                {/* </Switch> */}
                </div>
            </div>

        );
    }
};
const mapStateToProps = (state) => ({
    movie: state.movie
})
export default connect(mapStateToProps)(Home);