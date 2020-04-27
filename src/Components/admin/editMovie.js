import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Nav from './dashboard'
class Addmovie extends Component {
    constructor(props) {
        super(props)
        this.state = {

            submit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete=this.delete.bind(this)
    }
    handleSubmit = () => {
       let obj={}
        //     movieName:this.props.name,
        //     releaseYear:this.props.year,
        //     actor:this.props.actors,
        //     actress:this.props.actress,
        //     director:this.props.director,
        //     producer:this.props.producer,
        //     rating:this.props.rating,
        //     imgURL:this.props.imgURL

        // }
        if(this.props.name)
        obj={...obj,movieName:this.props.name}
        if(this.props.year)
        obj={...obj,releaseYear:this.props.year}
        if(this.props.actors)
        obj={...obj,actor:this.props.actors}
        if(this.props.actress)
        obj={...obj,actress:this.props.actress}
        if(this.props.director)
        obj={...obj,director:this.props.director}
        if(this.props.producer)
        obj={...obj,producer:this.props.producer}
        if(this.props.rating)
        obj={...obj,rating:this.props.rating}
        if(this.props.imgURL)
        obj={...obj,imgURL:this.props.imgURL}
        if (this.props.editname.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("ename").focus()
        }
       
        else {
            console.log(obj)
            this.props.movieUpdate(this.props.editname,obj)
            ToastsStore.success("Movie edited successfully")
        }
        
    }
    delete()
    {
        this.props.movieDelete(this.props.deletename)
        ToastsStore.success("Movie deleted successfully")
    }
    render() {

        return (
            <div>
                <Nav/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                        <h3 className="my-3">
                                            Add Movie
                </h3>
                                    </MDBCardHeader>
                            

                                        <MDBInput type="text" id='ename' className="form-control" label="Enter Movie name to be edited" onChange={this.props.onMovieEditNameChange} value={this.props.editname} title="Must be Alphabet" required />

                                        <MDBInput type="text" id='mname' className="form-control" label="Movie name" onChange={this.props.onMovieNameChange} value={this.props.name} title="Must be Alphabet" required />


                                        <MDBInput type="text" id='ryear' className="form-control" label="Release year" onChange={this.props.onYearChange} value={this.props.year} title="Must be Alphabet" required />

                                        <MDBInput type="text" id='rating' className="form-control" label="Rating" onChange={(e)=>this.props.onRatingChange(e.target.value)} value={this.props.rating} title="Must be Alphabet" required />
                                        {console.log(this.props.rating)}
                                        <MDBInput type="text" id='img' className="form-control" label="Enter the img URL" onChange={this.props.onImgChange} value={this.props.imgURL} title="Must be Alphabet" required />
                                        {console.log(this.props.imgURL)}

                                        <MDBInput type="text" id='producer' className="form-control" label="Enter Producer Name" onChange={this.props.onProducerChange} value={this.props.producer} required />



                                        <MDBInput type="text" id="director" className="form-control" label="Enter Director Name" onChange={this.props.onDirectorChange} value={this.props.director} required />

                                        <div>
                                            <MDBInput id="actor" class="form-control form-control-lg" label="Enter Actors" onChange={this.props.onActorInputChange} defaultValue={this.props.actorinput} />
                                            <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.props.setActors}>Add</button>
                                            <ul>
                                                {this.props.actors.map((item, key) => {
                                                    return <li>{item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label onClick={() => { this.props.delActors(key); this.setState({ input: this.state.input }) }}>X</label> </li>
                                                })}
                                            </ul>
                                        </div>

                                        <div>
                                            <MDBInput id="actress" class="form-control form-control-sm" label="Enter Actress" onChange={this.props.onActressInputChange} defaultValue={this.props.actressinput} />
                                            <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.props.setActress}>Add</button>
                                            <ul>
                                                {console.log(this.props.actress)}
                                                {this.props.actress.map((item, key) => {
                                                    return <li>{item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label onClick={() => { this.props.delActress(key); this.setState({ input: this.state.input }) }}>X</label> </li>
                                                })}
                                            </ul>
                                        </div>

                                        <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}>Edit Movie</button>
                                        <MDBInput type="text" id='ename' className="form-control" label="Enter Movie name to be deleted" onChange={this.props.onMovieDeleteNameChange} value={this.props.deletename} title="Must be Alphabet" required />
                                        <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.delete}>Delete</button>
                                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                                        
                                        
                                    
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


            </div>
        );
    }
}

export default Addmovie;