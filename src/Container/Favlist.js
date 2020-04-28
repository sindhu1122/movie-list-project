import Favlist from '../Components/Favlist/Favlist'
import { connect } from 'react-redux'
import getFavLists from '../api/favLists'
const mapDispatchToProps = dispatch => {
  return {

    display1: (value) =>
      dispatch({
        type: "DISPLAY",
        payload: value
      }),
    favLists: async (value) => {
      try {
        let res = await getFavLists(value)
        dispatch({
          type: "FAVLISTS",
          payload: res
        })
      }
      catch (error) {
        alert("Cannot get favourite list")
      }
    },
  }
}
const mapStateToProps = (state) => ({

  favouriteList: state.list.favouriteList,
  isLoggedIn: state.login.isLoggedIn

})
export default connect(mapStateToProps, mapDispatchToProps)(Favlist);