import * as actionTypes from '../actions/action'
const initialState = {

    searchedMovieName: '',
    searched: false,
    display: false,
    searchedMovie: '',
    currentMovie: ''
}
const search = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.MOVIECHANGE:
            return {
                ...state,
                searchedMovieName: action.payload,
                searched: false
            }
        case actionTypes.DISPLAY:
            return {
                ...state,
                display: true,
                currentMovie: action.payload
            }

        case actionTypes.MOVIESEARCH:
            let movie1 = []
            movie1.push(action.payload)
            return {
                ...state,
                searchedMovie: movie1,
                searched: true
            }
        case actionTypes.TOGGLE:
            return {
                ...state,
                searched: false
            }


        default: return state
    }
}
export default search;