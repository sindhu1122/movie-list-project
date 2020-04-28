import Home from '../Components/Home/Home'
import { connect } from 'react-redux'
import searchMovie from '../api/searchmovie'
import getMovies from '../api/getMovie'

const mapDispatchToProps = dispatch => {
    return {
        onMovieChange: (value) =>
            dispatch({
                type: "MOVIECHANGE",
                payload: value
            }),

        display1: (value) =>
            dispatch({
                type: "DISPLAY",
                payload: value
            }),
        movielist: async () => {
            try {
                let res = await getMovies()
                dispatch({
                    type: "MOVIELIST",
                    payload: res
                })
            }
            catch (error) {
                alert(error)
            }
        }

    }
}

const mapStateToProps = (state) => ({
    movie: state.signUp.movie,
    isLoggedIn: state.login.isLoggedIn,
    searched: state.search.searched,
    searchedMovie: state.search.searchedMovie,
    display: state.search.display,
    username: state.login.username,
    searchedMovieName: state.search.searchedMovieName
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);