import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import Back from '../Back'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Side from '../../Container/Side'
const { Meta } = Card;
//var browserHistory = ReactRouter.browserHistory;
class Movie extends Component {
    addWatch = (mov, user) => {
        let o = {
            username: user,
            mov: mov
        }
        console.log(o)
        this.props.addWatch1(o)
    }
    addFavourite = (mov, user) => {
        let o = {
            username: user,
            mov: mov
        }
        console.log(o)
        this.props.addFavourite1(o)
    }
    render() {

        return (

            <div justify="space-around" align="middle">

                {console.log(this.props.currmovie)}
                {console.log(this.props.username)}
                <Side />
                <Card justify="space-around" align="middle"
                    style={{ width: 900, backgroundColor: "#EDC2D8FF", marginTop: 30 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={() => { this.addWatch(this.props.currmovie, this.props.username) }}>
                            <i class="fa fa-plus-circle"></i>Watch list
                        </button>,
                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={() => { this.addFavourite(this.props.currmovie, this.props.username) }}>
                            <i class="fa fa-heart"></i>Favourite list
                        </button>,
                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect">
                            More...
                        </button>
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={this.props.currmovie}
                        description="Actors"
                    />
                </Card>
                <Back />
            </div>
        )
    }
}
export default Movie;