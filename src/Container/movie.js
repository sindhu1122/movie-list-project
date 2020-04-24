import Movie from '../Components/movie/movie'
import { connect } from 'react-redux'
import addWatchList from '../api/addWatchList'
import addFavouriteList from '../api/addFavouriteList'

const mapDispatchToProps = dispatch => {
    return {
        addWatch1: async(o) =>
        {
            let res=await addWatchList(o)
           dispatch({
                type: "ADDWATCH",
                payload: o
            })},
        addFavourite1:async (o) =>
        {
            let result=await addFavouriteList(o)
            dispatch({
                type: "ADDFAVOURITE",
                payload: o
            })},

    }
}

const mapStateToProps = (state) => ({
    currmovie: state.search.currmovie,
    username: state.login.username,
    movie:state.signUp.movie
})
export default connect(mapStateToProps, mapDispatchToProps)(Movie);