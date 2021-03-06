import Watchlist from '../Components/Watchlist/Watchlist'
import { connect } from 'react-redux'
import getWatchLists from '../api/watchLists'
const mapDispatchToProps = dispatch => {
  return {

    display1: (value) =>
      dispatch({
        type: "DISPLAY",
        payload: value
      }),
    watchLists: async (value) => {
      try {
        let res = await getWatchLists(value)
        console.log(res)
        dispatch({
          type: "WATCHLIST",
          payload: res
        })
      }
      catch (error) {
        alert("Cannot get watch list")
      }
    }
  }
}
const mapStateToProps = (state) => ({

  watchList: state.list.watchList,
  isLoggedIn: state.login.isLoggedIn

})
export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);