import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./Filter.css";
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Side from "../../Container/Side"
class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     selected:false
      

    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  
   addItem(selectedList,selectedItem) {
    console.log(selectedList)
    console.log(selectedItem)
    this.setState({selected:true})
   // this.props.getmovie(selectedList)
   
   }
   removeItem(selectedList,removeItem){
     if(selectedList.length==0)
     {
       this.setState({selected:false})
     }
   }

  render() {
    let objectArray=[]
    let movie=this.props.movie
    console.log(movie)
      movie.map((item,key)=>{     
        objectArray.push({key:item.releaseYear,cat:"Year"})
        item.MoviePeople.map((item1,key1)=>{
            item1.MoviePersonRoles.map((item2,key2)=>{
                if(item2.roleId==1)
                objectArray.push({key:item1.Person.name,cat:"Actor"})
                else if(item2.roleId==2)
                objectArray.push({key:item1.Person.name,cat:"Actress"})
                else if(item2.roleId==3)
                objectArray.push({key:item1.Person.name,cat:"Director"})
                else
                objectArray.push({key:item1.Person.name,cat:"Producer"})
            })
        })
    })
    console.log(objectArray)
    //const { plainArray, objectArray, selectedValues } = this.state;
    return (
      <div >
        {/* <Side/> */}
        <h5 style={{color:"black"}}>Select filters</h5>
        <Multiselect
          options={objectArray}
          displayValue="key"
          groupBy="cat"
          showCheckbox={true}
          onSelect={this.addItem}
          onRemove={this.removeItem}
          onChange={this.addItem.bind(this)}
          style={ {chips: { background: "red" },groupHeading :{
            fontSize:"30px",
            color: "black"
          }} }
        />
        {this.state.selected?
        <div>hoo</div>:null}
      </div>
    )
  }
}
export default Filter