import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row } from 'antd';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Link,
    Redirect
} from "react-router-dom";

import Movie from '../../Container/movie'
import Side from '../../Container/Side'
const { Meta } = Card;
class Favlist extends Component {
    state = {
        display: false
    }
    moviedetails = (obj) => {
        //console.log(this.props.display)
        this.setState({ display: true })
        this.props.display1(obj)
    }
    render(){
        console.log(this.props)
        let array = this.props.favlist.map(obj => {


            return <Col span={8}><Card style={{ width: 300, marginTop: 16 }} title={obj.movieName} extra={<Link to="/movie" onClick={() => { this.moviedetails(obj.movieName) }}>More</Link>}>
        
                <Meta

                    description={[
                        <div>
                            <img
                                alt="poster not found"
                                src={obj.imgURL}
                            />
                        </div>
                    ]}
                />
                </Card>
            </Col>
        })
        return (
            <div>
                <Side />
                <div className="site-card3" style={{ overflowY: 'scroll' }}>
                    <Row gutter={16}>
                        {array}
                    </Row>
                </div>
            </div>
        )
    }
}
export default Favlist;