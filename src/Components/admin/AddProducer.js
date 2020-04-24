import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
class AddProducer extends Component {
    constructor(props) {
        super(props)
        this.state = {

            submit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = () => {
        let obj={
            name:this.props.name,
            roleId:4
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
        let obj={
            name:this.props.update
        }
        if (this.props.edit.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("edit").focus()
        }
        else if (this.props.update.length <= 0) {
            ToastsStore.warning('Updated Name is Mandatory')
            document.getElementById("update").focus()
        }
        else {
            this.props.producerUpdate(this.props.edit,obj)
            ToastsStore.success("Producer Updated successfully")
        }

    }
    handleSubmitDelete = () => {
        if (this.props.delete.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("delete").focus()
        }
        else {
            this.props.producerDelete(this.props.delete)
            ToastsStore.success("Producer Deleted successfully")
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
                                                {/* <div className="form-group">
                        
                            <MDBInput type="number" id='age' className="form-control" label="Age" onChange={this.props.onAgeChange} value={this.props.age}  title="Must be Alphabet"  required />
                        </div> */}
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}>Add Producer</button>
                                                </td>
                                                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='name' className="form-control" label=" Delete Producer name" onChange={this.props.onNameChangeDelete} value={this.props.delete} title="Must be Alphabet" required />
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

                                                        <MDBInput type="text" id='editname' className="form-control" label=" Old Producer name" onChange={this.props.onNameChangeEdit} value={this.props.edit} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='deletename' className="form-control" label=" New Producer name" onChange={this.props.onNameChangeUpdate} value={this.props.update} title="Must be Alphabet" required />
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