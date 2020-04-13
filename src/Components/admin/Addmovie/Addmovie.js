import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import './Addmovie.css'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
class Addmovie extends Component {
    constructor(props) {
        super(props)
        this.state = {

            submit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = () => {
        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("mname").focus()
        }
        else if (this.props.year.length <= 0) {
            ToastsStore.warning('Year is Mandatory')
            document.getElementById("ryear").focus()
        }
        else if (this.props.producer.length <= 0) {
            ToastsStore.warning('Producer is Mandatory')
            document.getElementById("producer").focus()
        }
        else if (this.props.director.length <= 0) {
            ToastsStore.warning('Director is Mandatory')
            document.getElementById("director").focus()
        }
        else if (this.props.actors.length <= 0) {
            ToastsStore.warning('Actors is Mandatory')
            document.getElementById("actor").focus()
        }
        else if (this.props.actress.length <= 0) {
            ToastsStore.warning('Actress is Mandatory')
            document.getElementById("actress").focus()
        }



        else {
            ToastsStore.success("Movie Added successfully")
        }

    }
    render() {

        return (
            <div>

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
                                    <form>



                                        <MDBInput type="text" id='mname' className="form-control" label="Movie name" onChange={this.props.onMovieNameChange} value={this.props.name} title="Must be Alphabet" required />



                                        <MDBInput type="text" id='ryear' className="form-control" label="Release name" onChange={this.props.onYearChange} value={this.props.year} title="Must be Alphabet" required />



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

                                        <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}>Add Movie</button>
                                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                                        <table>
                                            <tr>
                                                <td>
                                                    <MDBInput id="actress" class="form-control form-control-sm" label="Enter Actress" onChange={this.props.onActressInputChange} defaultValue={this.props.actressinput} />
                                                </td>
                                                <td>
                                                    <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.props.setActress}>Add</button>
                                                </td>
                                                <td>
                                                    <MDBInput id="actress" class="form-control form-control-sm" label="Enter Actress" onChange={this.props.onActressInputChange} defaultValue={this.props.actressinput} />
                                                </td>
                                                <td>
                                                    <button class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.props.setActress}>Add</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
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