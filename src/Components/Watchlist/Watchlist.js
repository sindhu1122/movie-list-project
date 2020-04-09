import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card, Col, Row } from 'antd';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Link,
    Redirect
  } from "react-router-dom";
  import Movie from '../../Container/movie'
class Watchlist extends Component{
    state={
        display:false
    }
    moviedetails= async(obj)=>{
        //console.log(this.props.display)
        this.setState({display:true})
        await this.props.display1(obj)
     }
    render()
    {
        console.log(this.props.watchlist)
        let array = this.props.watchlist.map(obj => {


            return <Col span={8}><Card style={{ width: 300, marginTop: 16 }} title={obj} extra={<Link to="/movie" onClick={()=>{this.moviedetails(obj)}}>More</Link>}>
                </Card></Col>
        })
        return(
            <div>
                <Router>
                    {!this.state.display?
                <div className="site-card3" style={{ overflowY: 'scroll' }}>
            <Row gutter={16}>
              {array}
            </Row>
          </div>:
          <Switch>
         <Route path="/movie" exact component={Movie}></Route>
         </Switch>}
         </Router>
            </div>
        )
    }
}
export default Watchlist;