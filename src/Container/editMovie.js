import { connect } from 'react-redux';
import Addmovie from '../Components/admin/editMovie';
import editMovie from '../api/editMovie';
import deleteMovie from '../api/deleteMovie'
const mapDispatchToProps = dispatch => {
    return {
        onMovieNameChange: (value) =>
            dispatch({
                type: "MOVIENAME",
                payload: value.target.value
            }),
        onMovieEditNameChange: (value) =>
            dispatch({
                type: "MOVIENAMEEDIT",
                payload: value.target.value
            }),
        onMovieDeleteNameChange: (value) =>
            dispatch({
                type: "MOVIENAMEDELETE",
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
        movieUpdate: async (name, value) => {
            try {
                let res = await editMovie(name, value)
                dispatch({
                    type: "MOVIEEDIT",
                    payload: res
                })
            }
            catch (error) {
                //alert("cannot update movie")
            }
        },
        movieDelete: async (name) => {
            try {
                let res = await deleteMovie(name)
                dispatch({
                    type: "MOVIEDELETE",
                    payload: res
                })
            }
            catch (error) {
                alert("Cannot delete movie")
            }
        }

    };
};
const mapStateToProps = (state) => {
    return {
        movies: state.editmovie.movies,
        actors: state.editmovie.actors,
        actress: state.editmovie.actress,
        name: state.editmovie.name,
        director: state.editmovie.director,
        producer: state.editmovie.producer,
        year: state.editmovie.year,
        actorInput: state.editmovie.actorinput,
        actressInput: state.editmovie.actressinput,
        rating: state.editmovie.rating,
        imgURL: state.editmovie.imgURL,
        nameToBeEdited: state.editmovie.nameToBeEdited,
        nameToBeDeleted: state.editmovie.nameToBeDeleted
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addmovie);