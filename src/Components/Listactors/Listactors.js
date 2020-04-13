import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./Listactors.css";
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ListActors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
            objectArray: [
                { key: "Mahesh", cat: "Name" },
                { key: "Varun", cat: "Name" },
                { key: "Keerthi suresh", cat: "Age" },
                { key: "Rashmika", cat: "Age" },
                { key: "Rajamouli", cat: "Movie" },
                { key: "Sekhar Kammula", cat: "Movie" },],

            selectedValues: [
                { key: "Option 1", cat: "Group 1" },
                { key: "Option 2", cat: "Group 1" }
            ]
        };
        this.style = {
            chips: {
                background: "red"
            },
            searchBox: {
                border: "none",
                "border-bottom": "1px solid blue",
                "border-radius": "0px"
            },
            multiselectContainer: {
                color: "red"
            }
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
    }
    render() {
        const { plainArray, objectArray, selectedValues } = this.state;
        return (
            <div className="App">
                <h5 style={{ color: "white" }}>List Actors by filters</h5>
                <Multiselect
                    options={objectArray}
                    displayValue="key"
                    groupBy="cat"
                    showCheckbox={true}
                />

            </div>
        )
    }
}
export default ListActors