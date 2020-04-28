import * as actionTypes from '../actions/action'
const initialState = {
    favouriteList: '',
    watchList: ''
}
const search = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FAVLISTS:
            return {
                ...state,
                favouriteList: action.payload
            }


        case actionTypes.WATCHLIST:

            return {
                ...state,
                watchList: action.payload
            }


        default: return state
    }
}
export default search;