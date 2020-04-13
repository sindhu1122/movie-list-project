import Watchlist from '../Components/Watchlist/Watchlist'
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

  watchlist: state.list.watchlist

})
export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);