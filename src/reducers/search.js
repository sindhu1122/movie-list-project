import * as actionTypes from '../actions/action'
const initialState = {

    moviecha: '',
    chage: false,
    movie1: [],
    display: false,
    currmovie: ''
}
const search = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.MOVIECHANGE:
            return {
                ...state,
                moviecha: action.payload,
                chage: false
            }
        case actionTypes.DISPLAY:
            return {
                ...state,
                display: true,
                currmovie: action.payload
            }

        case actionTypes.MOVIESEARCH:
                let movie1 = []
                movie1.push(action.payload)
                return {
                    ...state,
                    movie1: movie1,
                    chage: true
                }
        case actionTypes.TOGGLE:
            return {
                ...state,
                chage:false
            }


        default: return state
    }
}
export default search;