import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./Filter.css";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Card, Col, Row } from 'antd';
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Side from "../../Container/Side"
const { Meta } = Card;
class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     selected:false,
     selectedList:'',
     toggle:false
      
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  
  componentDidUpdate=async(previousProps,prevState)=>{
    if(this.state.toggle!==prevState.toggle){
   await this.props.filterList(this.state.selectedList)
    this.props.getList(this.props.filterlist)}
  }
  moviedetails = (obj) => {
    console.log(this.props.display)
    this.props.display1(obj)
  }
   addItem(selectedList,selectedItem) {
   
    this.setState({selected:true,selectedList:selectedList,toggle:true})
    console.log(this.state.selectedList)
  
   }
   removeItem(selectedList,removeItem){
     if(selectedList.length==0)
     {
       this.setState({selected:false})
     }
     this.setState({selectedList:selectedList,toggle:false})
   
   }

  render() {
    let objectArray=[],year=[]
    let movie=this.props.movie
    let mov=[]
    console.log(movie)
    for(var i=1;i<=10;i++)
    objectArray.push({key:i,cat:"Rating"})
    
      movie.map((item,key)=>{    
       
        if(!year.includes(item.releaseYear))
        objectArray.push({key:item.releaseYear,cat:"Year"})
        year.push(item.releaseYear)
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
    let array
     mov=this.props.reslist
    if(mov.length>0)
    {
     array = mov.map((obj,key) => {
      return <Col span={8}><Card style={{ width: 500, marginTop: 16 }} title={obj.movieName} extra={<Link to="/movie" onClick={() => { this.moviedetails(obj.movieName) }}>More</Link>}>
        
                <Meta

          description={[
            <div>
              <img
                            alt="poster not found"
                            src={obj.imgURL}
                        />
            </div>
          ]}
        />
      </Card></Col>
    })
  }
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
          caseSensitiveSearch="true"
          style={ {chips: { background: "red" },groupHeading :{
            fontSize:"30px",
            color: "black"
          }} }
        />
        {this.state.selected?
        <div>
           <div className="site-card3" style={{ overflowY: 'scroll' }}>
          <Row gutter={16}>
            {array}
          </Row>
        </div>
        </div>:null}
      

        
      </div>
    )
  }
}
export default Filter