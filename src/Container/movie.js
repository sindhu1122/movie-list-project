import Movie from '../Components/movie/movie'
import { connect } from 'react-redux'
import addWatchList from '../api/addWatchList'
import addFavouriteList from '../api/addFavouriteList'
import addReview from '../api/addReview'
const mapDispatchToProps = dispatch => {
    return {
        addWatch1: async (o) => {
            try {
                let res = await addWatchList(o)
                dispatch({
                    type: "ADDWATCH",
                    payload: o
                })
            }
            catch (error) {
                alert(error)
            }
        },
        addFavourite1: async (o) => {
            try {
                let result = await addFavouriteList(o)
                dispatch({
                    type: "ADDFAVOURITE",
                    payload: o
                })
            }
            catch (error) {
                alert(error)
            }
        },
        onReviewChange: (value) => {
            dispatch({
                type: "ONREVIEWCHANGE",
                payload: value.target.value
            })
        },
        addReview: async (name, value) => {
            try {
                let res = await addReview(name, value)
                dispatch({
                    type: "ADDREVIEW",
                    payload: res
                })
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

    }
}

const mapStateToProps = (state) => ({
    currmovie: state.search.currmovie,
    username: state.login.username,
    movie: state.signUp.movie,
    review: state.movie.review,
    submit:state.login.submit
})
export default connect(mapStateToProps, mapDispatchToProps)(Movie);