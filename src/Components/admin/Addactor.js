import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBIcon,
    MDBCardHeader, MDBCardBody
} from 'mdbreact';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Nav from '../admin/dashboard'
class AddActor extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitUpdate=this.handleSubmitUpdate.bind(this)
        this.handleSubmitDelete=this.handleSubmitDelete.bind(this)
    }
    handleSubmit = () => {
        let obj={
            name:this.props.name,
            age:this.props.age,
            roleId:1
        }
        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("name").focus()
        }
        else if (this.props.age.length <= 0) {
            ToastsStore.warning('Age is Mandatory')
            document.getElementById("age").focus()
        }

        else {
            this.props.actorSubmit(obj)
            ToastsStore.success("Actors Added successfully")
        }

        
    }
    handleSubmitUpdate = () => {
        let obj
        if(this.props.update.length <= 0)
        {
         obj={
            age:this.props.editage
        }
    }
    else if(this.props.editage.length <= 0){
        obj={
            name:this.props.update
        }
    }
    else{
        obj={
            name:this.props.update,
            age:this.props.editage
        }
    }

    
        if (this.props.edit.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("edit").focus()
        }
        else if (this.props.update.length <= 0 && this.props.editage.length <= 0) {
            ToastsStore.warning('Fields to update is Mandatory')
            document.getElementById("update").focus()
        }
        else {
            this.props.actorUpdate(this.props.edit,obj)
            ToastsStore.success("Actors Updated successfully")
        }
        
    }
    handleSubmitDelete = () => {
        if (this.props.delete.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            document.getElementById("delete").focus()
        }
        else {
            this.props.actorDelete(this.props.delete)
            ToastsStore.success("Actors Deleted successfully")
        }
       

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
                                            Add Actor
                </h3>
                                    </MDBCardHeader>
                                    <form>
                                        <table>
                                            <tr>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='name' className="form-control form-control-lg" label="Actor name" onChange={this.props.onNameChange} value={this.props.name} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="number" id='age' className="form-control form-control-lg" label="Age" onChange={this.props.onAgeChange} value={this.props.age} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}>Add Actor</button>
                                                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.CENTER} />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colSpan="2">
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='delete' className="form-control form-control-lg" label="Actor name to delete" onChange={this.props.onNameDelete} value={this.props.delete} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>


                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitDelete}>Delete</button>
                                                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.CENTER} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='edit' className="form-control form-control-lg" label="Old Actor name" onChange={this.props.onNameEdit} value={this.props.edit} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="form-group">

                                                        <MDBInput type="text" id='update' className="form-control form-control-lg" label="New Actor name " onChange={this.props.onNameUpdate} value={this.props.update} title="Must be Alphabet" required />
                                                    </div>
                                                </td>
                                                <td>
                                                    <MDBInput type="number" id='editage' className="form-control form-control-lg" label="Age" onChange={this.props.onAgeChangeEdit} value={this.props.editage} title="Must be Alphabet" required />
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmitUpdate}>Update</button>
                                                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.CENTER} />
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

export default AddActor;