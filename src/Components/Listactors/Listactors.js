import React from "react";
import ReactDOM from "react-dom";
import { Multiselect } from "multiselect-react-dropdown";
import "./Listactors.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Card, Col, Row } from 'antd';
//import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Side from "../../Container/Side"
const { Meta } = Card;
class FilterList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      selectedList: '',
      toggle: false


    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  async componentDidUpdate(previousProps, prevState) {
    if (this.state.toggle !== prevState.toggle) {
      await this.props.filterList(this.state.selectedList)
      this.props.getList(this.props.filterlist)
    }
  }

  addItem = (selectedList, selectedItem) => {

    this.setState({ selected: true, selectedList: selectedList, toggle: true })
    console.log(this.state.selectedList)

  }
  removeItem(selectedList, removeItem) {
    if (selectedList.length == 0) {
      this.setState({ selected: false })
    }
    this.setState({ selectedList: selectedList, toggle: false })

  }

  render() {
    let objectArray = [], year = []
    let movie = this.props.movie
    let mov = []
    console.log(movie)
    movie.map((item, key) => {
      objectArray.push({ key: item.movieName, cat: "Movie" })
      item.MoviePeople.map((item1, key1) => {
        item1.MoviePersonRoles.map((item2, key2) => {
          if (item2.roleId == 1 || item2.roleId == 2)
            if (item1.Person.age !== null)
              objectArray.push({ key: item1.Person.age, cat: "Age" })
        })
      })
    })
    let array
    mov = this.props.reslist
    if (mov.length > 0) {
      array = mov.map((obj, key) => {
        return <Col span={8}><Card style={{ width: 200, marginTop: 16 }} title={obj}  >


        </Card></Col>
      })
    }
    console.log(objectArray)
    //const { plainArray, objectArray, selectedValues } = this.state;
    return (
      <div >
        {/* <Side/> */}
        <h5 style={{ color: "black" }}>Select filters</h5>
        <Multiselect
          options={objectArray}
          displayValue="key"
          groupBy="cat"
          showCheckbox={true}
          onSelect={this.addItem}
          onRemove={this.removeItem}
          onChange={this.addItem.bind(this)}
          style={{
            chips: { background: "red" }, groupHeading: {
              fontSize: "30px",
              color: "black"
            }
          }}
        />
        {this.state.selected ?
          <div>
            <div className="site-card3" style={{ overflowY: 'scroll' }}>
              <Row gutter={16}>
                {array}
              </Row>
            </div>
          </div> : null}
      </div>
    )
  }
}
export default FilterList