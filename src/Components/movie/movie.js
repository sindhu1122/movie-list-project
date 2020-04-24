import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import Back from '../Back'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Side from '../../Container/Side'
import { ACTORS, ACTRESS, PRODUCER } from '../../actions/action';
import './movie.css'
import jwt from 'jsonwebtoken'
const { Meta } = Card;

//var browserHistory = ReactRouter.browserHistory;
class Movie extends Component {
    
    addWatch = (mov, user) => {
        let o = {
            userName: user,
            movie: mov
        }
        console.log(o)
        this.props.addWatch1(o)
    }
    addFavourite = (mov, user) => {
        let o = {
            userName: user,
            movie: mov
        }
        console.log(o)
        this.props.addFavourite1(o)
    }
    render() {
        const token = localStorage.getItem("token")
    
        const payload = jwt.decode(token)
        let movie=this.props.movie
        let actor=[],actress=[],director=[],producer=[]
        movie.map((item,key)=>{
            if(this.props.currmovie==item.movieName)
            {
            item.MoviePeople.map((item1,key1)=>{
                item1.MoviePersonRoles.map((item2,key2)=>{
                    if(item2.roleId==1)
                    actor.push(item1.Person.name)
                    else if(item2.roleId==2)
                    actress.push(item1.Person.name)
                    else if(item2.roleId==3)
                    director.push(item1.Person.name)
                    else
                    producer.push(item1.Person.name)
                })

                
            })
        }
        })
    
        console.log(actor,actress,director,producer)
        return (

            <div justify="space-around" align="middle">

                {console.log(this.props.currmovie)}
                {console.log(this.props.username)}
                {console.log(this.props.movie)}
                
                <Side />
                <Back />
                {movie.map((item,key)=>{
                    if(this.props.currmovie==item.movieName)
                    {
                  return <Card justify="space-around" align="middle"
                    style={{ width: 1000, backgroundColor: "#EDC2D8FF", marginTop: 30 }}
                    // cover={
                    //     <img
                    //         alt="poster not found"
                    //         src={item.imgURL}
                    //     />
                    // }
                    actions={[
                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={() => { this.addWatch(this.props.currmovie, payload.userName) }}>
                            <i class="fa fa-plus-circle"></i>Watch list
                        </button>,
                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={() => { this.addFavourite(this.props.currmovie, payload.userName) }}>
                            <i class="fa fa-heart"></i>Favourite list
                        </button>,
                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect">
                            Rating:{item.rating}
                        </button>
                    ]}
                >
                
                    <Meta
                        title={this.props.currmovie}
                        description={[
                            <div>
                                <img
                            alt="poster not found"
                            src={item.imgURL}
                        />
                              <h4>Cast</h4>
                              <table>
                                  <tr>
                                      <td>Actors</td>
                                      <td>Actress</td>
                                      <td>Director</td>
                                      <td>Producer</td>
                                  </tr>
                                  <tr>
                                      <td>
                                      {actor.map(item=>{
                                        return  <p>{item}</p>
                                      })}
                                      </td>
                                  
                                  <td>
                                      {actress.map(item=>{
                                        return  <p>{item}</p>
                                      })}
                                  </td>
                                  <td>
                                      {director.map(item=>{
                                        return  <p>{item}</p>
                                      })}
                                  </td>
                                  <td>
                                      {producer.map(item=>{
                                        return  <p>{item}</p>
                                      })}
                                      </td>
                                  </tr>
                              </table>

                            </div>
                          ]}
                        
                    />
                </Card>
                    }
                })}
                
            </div>
        )
    }
}
export default Movie;