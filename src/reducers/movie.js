import * as actionTypes from '../actions/action'
const initialState = {
    movienamewatch: '',
    movienamefav: ''
}
const movie = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADDWATCH:

            return {
                ...state,
                movienamewatch: action.payload.movie
            }
        case actionTypes.ADDFAVOURITE:

            
            return {
                ...state,
                movienamefav: action.payload.movie
            }
        default: return state
    }
}
export default movie