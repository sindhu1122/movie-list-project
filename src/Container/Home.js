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
        //     movieSearch: () =>
        //     {
        //         try{
        //         let res=searchMovie(this.props.moviecha)
        //         console.log(res)
        //         if(!res)
        //         alert("No movie found")
        //         else{
        //         dispatch({
        //             type: "MOVIESEARCH",
        //             payload:res
        //         })
        //     }
        //     }
        //     catch(error){
        //         alert(error)
        //     }
        // },
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
    moviecha: state.search.moviecha
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);