import * as actionTypes from '../actions/action'
const initialState = {
    filterLists: '',
    resultList: ''
}
const filterList = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FILTERLIST:
            return {
                ...state,
                filterLists: action.payload
            }
        case actionTypes.GETFILTERLIST:
            return {
                ...state,
                resultList: action.payload

            }

        default: return state
    }
}
export default filterList;