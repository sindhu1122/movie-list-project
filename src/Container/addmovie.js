import { connect } from 'react-redux';
import Addmovie from '../Components/admin/Addmovie/Addmovie';
import addMovie from '../api/addMovie';

const mapDispatchToProps = dispatch => {
    return {
        onMovieNameChange: (value) =>
            dispatch({
                type: "MOVIENAME",
                payload: value.target.value
            }),
        onYearChange: (value) =>
            dispatch({
                type: "YEAR",
                payload: value.target.value
            }),
        onRatingChange: (value) => {
            console.log(value)
            dispatch({
                type: "RATING",
                payload: value
            })
        },
        onImgChange: (value) =>
            dispatch({
                type: "IMG",
                payload: value.target.value
            }),
        onDirectorChange: (value) =>
            dispatch({
                type: "DIRECTOR",
                payload: value.target.value
            }),
        onProducerChange: (value) =>
            dispatch({
                type: "PRODUCER",
                payload: value.target.value
            }),

        onActorInputChange: (value) =>
            dispatch({
                type: "ACTORSINPUT",
                payload: value.target.value
            }),
        onActressInputChange: (value) =>
            dispatch({
                type: "ACTRESSINPUT",
                payload: value.target.value
            }),
        delActors: (value) =>
            dispatch({
                type: "DELACTORS",
                payload: value
            }),
        delActress: (value) =>
            dispatch({
                type: "DELACTRESS",
                payload: value
            }),
        setActors: (value) =>
            dispatch({
                type: "ACTORS",
                payload: value.target.value
            }),
        setActress: (value) =>
            dispatch({
                type: "ACTRESS",
                payload: value.target.value
            }),
        movieSubmit: async (value) => {
            let res = await addMovie(value)
            dispatch({
                type: "MOVIESUBMIT",
                payload: res
            })
        }

    };
};
const mapStateToProps = (state) => {
    return {
        movies: state.addmovie.movies,
        actors: state.addmovie.actors,
        actress: state.addmovie.actress,
        name: state.addmovie.name,
        director: state.addmovie.director,
        producer: state.addmovie.producer,
        year: state.addmovie.year,
        actorinput: state.addmovie.actorinput,
        actressinput: state.addmovie.actressinput,
        rating: state.addmovie.rating,
        imgURL: state.addmovie.imgURL
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addmovie);