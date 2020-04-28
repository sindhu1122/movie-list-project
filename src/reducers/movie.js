import * as actionTypes from '../actions/action'
const initialState = {
    movieNameWatch: '',
    movieNameFav: '',
    review: ''
}
const movie = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADDWATCH:

            return {
                ...state,
                movieNameWatch: action.payload.movie
            }
        case actionTypes.ADDFAVOURITE:


            return {
                ...state,
                movieNameFav: action.payload.movie
            }
        case actionTypes.ONREVIEWCHANGE:
            return {
                ...state,
                review: action.payload
            }
        case actionTypes.ADDREVIEW:
            return {
                ...state
            }
        default: return state
    }
}
export default movie