import * as actionTypes from '../actions/action'
const initialState = {
    filterLists: '',
    resultList: ''
}
const filterList = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FILTERLISTACTORS:
            console.log(action.payload)
            return {
                ...state,
                filterLists: action.payload
            }
        case actionTypes.GETFILTERACTORS:
            return {
                ...state,
                resultList: action.payload

            }

        default: return state
    }
}
export default filterList;