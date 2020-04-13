import Movie from '../Components/movie/movie'
import { connect } from 'react-redux'
const mapDispatchToProps = dispatch => {
    return {
        addWatch1: (o) =>
            dispatch({
                type: "ADDWATCH",
                payload: o
            }),
        addFavourite1: (o) =>
            dispatch({
                type: "ADDFAVOURITE",
                payload: o
            }),

    }
}

const mapStateToProps = (state) => ({
    currmovie: state.search.currmovie,
    username: state.login.username
})
export default connect(mapStateToProps, mapDispatchToProps)(Movie);