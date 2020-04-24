import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./Listactors.css";
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ListActors extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selected:false
        }
            
           
       
        this.addItem = this.addItem.bind(this);
    }
    addItem(selectedList,selectedItem) {
        console.log(selectedList)
       
    }
    render() {
       let objectArray=[]
        return (
            <div className="App">
                <h5 style={{ color: "black" }}>List Actors by filters</h5>
                <Multiselect
                    options={objectArray}
                    displayValue="key"
                    groupBy="cat"
                    onSelect={this.addItem}
                    showCheckbox={true}
                />

            </div>
        )
    }
}
export default ListActors