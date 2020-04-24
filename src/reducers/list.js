import * as actionTypes from '../actions/action'
const initialState = {
    favlist: '',
    watchlist: ''
}
const search = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FAVLISTS:
            return {
                ...state,
                favlist: action.payload
            }


        case actionTypes.WATCHLIST:
            
            return {
                ...state,
                watchlist: action.payload
            }


        default: return state
    }
}
export default search;