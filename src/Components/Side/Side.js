// import React, { Component } from 'react';
// import { slide as Menu } from "react-burger-menu";
// import {
//   Switch,
//   Route,
//   BrowserRouter as Router,
//   Link,
//   Redirect
// } from "react-router-dom";
// import './Side.css'
// import {connect} from 'react-redux'
// import Favlist from '../Favlist/Favlist'
// class Side extends Component{
//     handleMovie=(event)=>
//   {
//     this.props.onMovieChange(event.target.value)
//   }
//   enterPressed= async(e)=>{
//     var code=e.keycode||e.which;
//     if(code==13)
//     {
//       await this.props.movieSearch()
//     }
//   }
//   favList= async ()=>{
//       await this.props.favLists(this.props.username)
//   }
//   toggle=async ()=>{
//       await this.props.toggle1()
//   }
//     render()
//     {
//         return(
//             <Router>
//         <div className="header">
//         <Menu >
//           <Link to="/filters">Filters</Link>
//           <Link to="/list actors">List</Link>
//         </Menu>

//         <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">

//           <div class="collapse navbar-collapse" id="navbarSupportedContent-333">

//             <ul class="navbar-nav ml-auto nav-flex-icons">
//               <li class="nav-item">
//                 <div class="md-form my-0">
//                   <input 
//                   class="form-control mr-lg-2" 
//                   type="text" 
//                   placeholder="Search" 
//                   aria-label="Search" 
//                   onChange={this.handleMovie}
//                   onKeyPress={this.enterPressed}/>
//                 </div>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link waves-effect waves-light">
//                   <i class="fa fa-plus-circle"></i>Watch list
//       </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link waves-effect waves-light" onClick={this.favList} to='/favlist'>
//                   <i class="fa fa-heart"></i>Favourites
//       </Link>
//               </li>
//               {this.props.submit ?
//                 <li class="nav-item">
//                   <Link class="nav-link waves-effect waves-light" to="/logout">
//                     Logout
//     </Link>
//                 </li> :
//                 <li class="nav-item">
//                   <Link class="nav-link waves-effect waves-light" onClick={this.toggle} to="/sigup">
//                     Signup
//       </Link>
//                 </li>}

//             </ul>
//           </div>
//         </nav>
//         </div>
//         <Switch>
//          <Route path="/favlist" exact component={Favlist}></Route>
//          </Switch>

//         </Router>
//         )
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         onMovieChange: (value) =>
//             dispatch({
//                 type: "MOVIECHANGE",
//                 payload: value
//             }),
//             movieSearch:()=>
//                       dispatch({
//                       type:"MOVIESEARCH"
//                       }),
//           display1:()=>
//           dispatch({
//           type:"DISPLAY"
//           }),
//           favLists:(value)=>
//           dispatch({
//           type:"FAVLISTS",
//           payload:value
//           }),
//           toggle1:()=>
//           dispatch({
//               type:"TOGGLE"
//           })
//   }
//   }
  
//   const mapStateToProps = (state) => ({
//     movie: state.signUp.movie,
//     submit: state.login.submit,
//     username:state.login.username,
//     chage:state.search.chage,
//     movie1:state.search.movie1,
//     display:state.search.display,
//     favlist:state.list.favlist,
//     watchlist:state.list.watchlist
//   })
//   export default connect(mapStateToProps,mapDispatchToProps)(Side);
