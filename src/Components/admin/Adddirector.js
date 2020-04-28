import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Nav from './dashboard'
class AddDirector extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = () => {
        let obj = {
            name: this.props.name,
            roleId: 3
        }
        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }
        else {
            ToastsStore.success("Director Added successfully")
        }
        this.props.directorSubmit(obj)

    }
    handleSubmitDelete = () => {
        if (this.props.nameToBeDeleted.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("deletename").focus()
        }

        else {
            this.props.directorDelete(this.props.nameToBeDeleted)
            ToastsStore.success("Director Deleted successfully")
        }

    }
    handleSubmitUpdate = () => {
        let obj = {
            name: this.props.nameToBeUpdated
        }

        if (this.props.nameToBeEdited.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }
        else if (this.props.nameToBeUpdated.length <= 0) {
            ToastsStore.warning('Updated value is Mandatory')
            document.getElementById("updatename").focus()
        }
        else {
            this.props.directorUpdate(this.props.nameToBeEdited, obj)
            ToastsStore.success("Director Updated successfully")
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
                                            Add Director
                </h3>
                                    </MDBCardHeader>
                                    <form>
                                        <table>
                                            <tr>
                                                <td colSpan="2">
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='name' className="form-control form-control-lg" label="Director name" onChange={this.props.onNameChange} value={this.props.name} title="Must be Alphabet" required />
                                                    </div>
                                                </td >
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}>Add Director</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='deletename' className="form-control form-control-lg" label=" Delete Director name" onChange={this.props.onNameChangeDelete} value={this.props.nameToBeDeleted} title="Must be Alphabet" required />
                                                    </div>
                                                </td >
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitDelete}>Delete Director</button>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='editname' className="form-control form-control-lg" label=" Old Director name" onChange={this.props.onNameChangeEdit} value={this.props.nameToBeEdited} title="Must be Alphabet" required />
                                                    </div>
                                                </td >
                                                <td>
                                                    <MDBInput type="text" id='updatename' className="form-control form-control-lg" label=" New Director name" onChange={this.props.onNameChangeUpdate} value={this.props.nameToBeUpdated} title="Must be Alphabet" required />
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitUpdate}>Update Director</button>
                                                </td>
                                            </tr>

                                            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

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

export default AddDirector;