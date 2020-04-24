import Side from '../Components/Side/Side'
import { connect } from 'react-redux'
import searchMovie from '../api/searchmovie'
import getWatchLists from '../api/watchLists'
import getFavLists from '../api/favLists'
const mapDispatchToProps = dispatch => {
    return {
        onMovieChange: (value) =>
            dispatch({
                type: "MOVIECHANGE",
                payload: value
            }),
            movieSearch: async(value) =>
            {
                let res= await searchMovie(value)
                console.log(res)
                dispatch({
                    type: "MOVIESEARCH",
                    payload:res
                })},
        display1: (value) =>
            dispatch({
                type: "DISPLAY",
                payload: value
            }),
        favLists:async (value) =>
        {
        let res=await getFavLists(value)
            dispatch({
                type: "FAVLISTS",
                payload: res
            })},
        toggle:()=>
        dispatch({
            type:"TOGGLE"
        }),
        watchLists:async (value) =>
        {
            let res=await getWatchLists(value)
            dispatch({
                type: "WATCHLIST",
                payload: res
            })},
        logout: () =>
            dispatch({
                type: "LOGOUT"
            })
    }
}

const mapStateToProps = (state) => ({
    movie: state.signUp.movie,
    submit: state.login.submit,
    chage: state.search.chage,
    movie1: state.search.movie1,
    display: state.search.display,
    username: state.login.username,
    moviecha:state.search.moviecha
})
console.log(mapDispatchToProps,mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Side);