import * as actionTypes from '../actions/action'
const initialState = {
    movie: ["a", "c", "d", "e", "g", "l", "m", "f", "t", "l", "m", "h", "ik", "tg", "itr", "kit", "itur", "fgf", "fgg", "gffg", "fgdf", "fdgdfg", "gfh", "ghgfh"],
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
            if (state.movie.includes(state.moviecha)) {
                let movie1 = []
                movie1.push(state.moviecha)
                return {
                    ...state,
                    movie1: movie1,
                    chage: true
                }
            }
        case actionTypes.TOGGLE:
            return {
                ...state,
                display: true
            }


        default: return state
    }
}
export default search;