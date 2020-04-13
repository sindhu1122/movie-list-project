import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
class AddDirector extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = () => {
        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }
        // else if(this.props.age.length<=0){
        //     ToastsStore.warning('Age is Mandatory')
        //     document.getElementById("age").focus()
        // }
        else {
            ToastsStore.success("Director Added successfully")
        }

    }
    handleSubmitDelete = () => {
        if (this.props.delete.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("deletename").focus()
        }

        else {
            ToastsStore.success("Director Deleted successfully")
        }

    }
    handleSubmitUpdate = () => {
        if (this.props.edit.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }
        else if (this.props.update.length <= 0) {
            ToastsStore.warning('Updated value is Mandatory')
            document.getElementById("updatename").focus()
        }
        else {
            ToastsStore.success("Director Updated successfully")
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

                                                        <MDBInput type="text" id='deletename' className="form-control form-control-lg" label=" Delete Director name" onChange={this.props.onNameChangeDelete} value={this.props.delete} title="Must be Alphabet" required />
                                                    </div>
                                                </td >
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitDelete}>Delete Director</button>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='editname' className="form-control form-control-lg" label=" Old Director name" onChange={this.props.onNameChangeEdit} value={this.props.edit} title="Must be Alphabet" required />
                                                    </div>
                                                </td >
                                                <td>
                                                    <MDBInput type="text" id='updatename' className="form-control form-control-lg" label=" New Director name" onChange={this.props.onNameChangeUpdate} value={this.props.update} title="Must be Alphabet" required />
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