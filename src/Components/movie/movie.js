import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import Back from '../Back'
import Side from '../../Container/Side'
import './movie.css'
import jwt from 'jsonwebtoken'
import { MDBInput } from 'mdbreact'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
const { Meta } = Card;

//var browserHistory = ReactRouter.browserHistory;
class Movie extends Component {

    componentDidMount() {
        this.props.display1(this.props.location.state.currentmovie)
    }
    addWatch = (mov, user) => {
        let o = {
            userName: user,
            movie: mov
        }
        console.log(o)
        if (this.props.isLoggedIn) {
            this.props.addWatch1(o)
            ToastsStore.success("Movie added to watch list")
        }
        else {
            ToastsStore.warning("Please signin to add to watchlist")
        }
    }
    addFavourite = (mov, user) => {
        let o = {
            userName: user,
            movie: mov
        }
        console.log(o)
        if (this.props.isLoggedIn) {
            this.props.addFavourite1(o)
            ToastsStore.success("Movie added to Favourite list")
        }
        else {
            ToastsStore.warning("Please signin to add to favorite list")
        }
    }
    enterPressed = (e) => {

        var code = e.keycode || e.which;
        if (code == 13) {
            this.props.addReview(this.props.currentMovie, this.props.review)
            ToastsStore.success("Review added")

        }
    }
    render() {
        const token = localStorage.getItem("token")

        const payload = jwt.decode(token)
        let movie = this.props.movie
        let actor = [], actress = [], director = [], producer = []
        movie.map((item, key) => {
            if (this.props.currentMovie == item.movieName) {
                item.MoviePeople.map((item1, key1) => {
                    item1.MoviePersonRoles.map((item2, key2) => {
                        if (item2.roleId == 1)
                            actor.push(item1.Person.name)
                        else if (item2.roleId == 2)
                            actress.push(item1.Person.name)
                        else if (item2.roleId == 3)
                            director.push(item1.Person.name)
                        else
                            producer.push(item1.Person.name)
                    })


                })
            }
        })

        console.log(actor, actress, director, producer)
        return (

            <div justify="space-around" align="middle">

                
                {console.log(this.props.username)}
                {console.log(this.props.movie)}

                <Side />
                <Back />
                {movie.map((item, key) => {
                    if (this.props.currentMovie == item.movieName) {
                        return <Card justify="space-around" align="middle"
                            style={{ width: 1000, backgroundColor: "#EDC2D8FF", marginTop: 30 }}

                            actions={[
                                <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={() => { this.addWatch(this.props.currentMovie, payload.userName) }}>
                                    <i class="fa fa-plus-circle"></i>Watch list
                        </button>,
                                <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={() => { this.addFavourite(this.props.currentMovie, payload.userName) }}>
                                    <i class="fa fa-heart"></i>Favourite list
                        </button>,
                                <button class="btn btn-outline-primary btn-sm m-0 waves-effect">
                                    Rating:{item.rating}
                                </button>
                            ]}
                        >

                            <Meta
                                title={this.props.currentMovie}

                                description={[
                                    <div>
                                        <MDBInput type="text" id='edit' className="form-control form-control-lg" label="Write a review..."
                                            onChange={this.props.onReviewChange}
                                            value={this.props.review}
                                            title="Must be Alphabet"
                                            onKeyPress={this.enterPressed}
                                            required />
                                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
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
                                                    {actor.map(item => {
                                                        return <p>{item}</p>
                                                    })}
                                                </td>

                                                <td>
                                                    {actress.map(item => {
                                                        return <p>{item}</p>
                                                    })}
                                                </td>
                                                <td>
                                                    {director.map(item => {
                                                        return <p>{item}</p>
                                                    })}
                                                </td>
                                                <td>
                                                    {producer.map(item => {
                                                        return <p>{item}</p>
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