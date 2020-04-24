import Home from '../Components/Home/Home'
import { connect } from 'react-redux'
import axios from 'axios'
import searchMovie from '../api/searchmovie'
const mapDispatchToProps = dispatch => {
    return {
        onMovieChange: (value) =>
            dispatch({
                type: "MOVIECHANGE",
                payload: value
            }),
        movieSearch: () =>
        {let res=searchMovie(this.props.moviecha)
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
        movielist:async()=>
        {let list=[]
        let res=await axios.get('http://localhost:8000/getallmovies')
        .then(function (response) {
            console.log(response.data);
            list=response.data
            
        })
            dispatch({
                type:"MOVIELIST",
                payload:list
            })},
        //   favLists:(value)=>
        //   dispatch({
        //   type:"FAVLISTS",
        //   payload:value
        //   }),
        //   watchLists:(value)=>
        //   dispatch({
        //   type:"WATCHLIST",
        //   payload:value
        //   }),
        //   logout:()=>
        //   dispatch({
        //       type:"LOGOUT"
        //   })
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);