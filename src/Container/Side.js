import Side from '../Components/Side/Side'
import { connect } from 'react-redux'
const mapDispatchToProps = dispatch => {
    return {
        onMovieChange: (value) =>
            dispatch({
                type: "MOVIECHANGE",
                payload: value
            }),
        movieSearch: () =>
            dispatch({
                type: "MOVIESEARCH"
            }),
        display1: (value) =>
            dispatch({
                type: "DISPLAY",
                payload: value
            }),
        favLists: (value) =>
            dispatch({
                type: "FAVLISTS",
                payload: value
            }),
        watchLists: (value) =>
            dispatch({
                type: "WATCHLIST",
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
    username: state.login.username
})
export default connect(mapStateToProps, mapDispatchToProps)(Side);