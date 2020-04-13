import Favlist from '../Components/Favlist/Favlist'
import { connect } from 'react-redux'
const mapDispatchToProps = dispatch => {
  return {

    display1: (value) =>
      dispatch({
        type: "DISPLAY",
        payload: value
      }),
  }
}
const mapStateToProps = (state) => ({

  favlist: state.list.favlist

})
export default connect(mapStateToProps, mapDispatchToProps)(Favlist);