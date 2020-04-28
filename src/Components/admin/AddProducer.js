import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Nav from './dashboard'
class AddProducer extends Component {
    constructor(props) {
        super(props)
        this.state = {

            submit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = () => {
        let obj = {
            name: this.props.name,
            roleId: 4
        }
        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }

        else {
            ToastsStore.success("Producer Added successfully")
        }
        this.props.producerSubmit(obj)
    }
    handleSubmitUpdate = () => {
        let obj = {
            name: this.props.nameToBeUpdated
        }
        if (this.props.nameToBeEdited.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("edit").focus()
        }
        else if (this.props.nameToBeUpdated.length <= 0) {
            ToastsStore.warning('Updated Name is Mandatory')
            document.getElementById("update").focus()
        }
        else {
            this.props.producerUpdate(this.props.nameToBeEdited, obj)
            ToastsStore.success("Producer Updated successfully")
        }

    }
    handleSubmitDelete = () => {
        if (this.props.nameToBeDeleted.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("delete").focus()
        }
        else {
            this.props.producerDelete(this.props.nameToBeDeleted)
            ToastsStore.success("Producer Deleted successfully")
        }

    }
    render() {

        return (
            <div>
                <Nav />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                        <h3 className="my-3">
                                            Add Producer
                </h3>
                                    </MDBCardHeader>
                                    <form>

                                        <table>
                                            <tr>
                                                <td colSpan="2">
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='name' className="form-control" label="Producer name" onChange={this.props.onNameChange} value={this.props.name} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}>Add Producer</button>
                                                </td>
                                                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='name' className="form-control" label=" Delete Producer name" onChange={this.props.onNameChangeDelete} value={this.props.nameToBeDeleted} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitDelete}>Delete Producer</button>
                                                </td>
                                                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                                            </tr>
                                            <tr>
                                                <td >
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='editname' className="form-control" label=" Old Producer name" onChange={this.props.onNameChangeEdit} value={this.props.nameToBeEdited} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='deletename' className="form-control" label=" New Producer name" onChange={this.props.onNameChangeUpdate} value={this.props.nameToBeUpdated} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitUpdate}>Update Producer</button>
                                                </td>
                                                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
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

export default AddProducer;