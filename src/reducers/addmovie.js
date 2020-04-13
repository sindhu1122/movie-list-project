import * as actionTypes from '../actions/action'
const initialState = {
    movies: [],
    actors: [],
    actress: [],
    name: '',
    director: '',
    producer: '',
    year: '',
    actorinput: '',
    actressinput: ''
}


const addmovies = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIENAME:

            return {
                ...state,
                name: action.payload
            }
        case actionTypes.YEAR: {

            return {
                ...state,
                year: action.payload
            }
        }
        case actionTypes.DIRECTOR: {

            return {
                ...state,
                director: action.payload
            }
        }
        case actionTypes.PRODUCER: {

            return {
                ...state,
                producer: action.payload
            }
        }
        case actionTypes.ACTORS: {
            console.log(state.actors)
            return {
                ...state, actors: [
                    ...state.actors,
                    state.actorinput
                ]
            }
        }
        case actionTypes.ACTRESS: {
            return {
                ...state, actress: [
                    ...state.actress,
                    state.actressinput
                ]
            }
        }
        case actionTypes.DELACTORS: {
            state.actors.splice(action.payload, 1)
            return state
        }
        case actionTypes.DELACTRESS: {
            state.actress.splice(action.payload, 1)
            return state
        }
        case actionTypes.ACTORSINPUT: {

            return {
                ...state,
                actorinput: action.payload
            }
        }
        case actionTypes.ACTRESSINPUT: {

            return {
                ...state,
                actressinput: action.payload
            }
        }

        default:
            return state;
    }
}

export default addmovies;