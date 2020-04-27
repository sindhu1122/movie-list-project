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
        movieSearch: async (value) => {
            try {
                let res = await searchMovie(value)
                console.log(res)
                if (!res)
                    alert("No movie found")
                else {
                    dispatch({
                        type: "MOVIESEARCH",
                        payload: res
                    })
                }
            }
            catch (error) {
                alert(error)
            }
        },
        display1: (value) =>
            dispatch({
                type: "DISPLAY",
                payload: value
            }),
        
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
    moviecha: state.search.moviecha
})
console.log(mapDispatchToProps, mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Side);