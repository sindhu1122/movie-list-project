import Favlist from '../Components/Favlist/Favlist'
import {connect} from 'react-redux'
const mapDispatchToProps = dispatch => {
    return {
       
          display1:()=>
          dispatch({
          type:"DISPLAY"
          }),
  }
  }
 const mapStateToProps = (state) => ({
   
    favlist:state.list.favlist
    
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Favlist);