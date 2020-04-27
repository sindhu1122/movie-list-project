import * as actionTypes from '../actions/action'
const initialState = {
    filterlist:'',
    reslist:''
}
const filterList = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FILTERLIST:
            return {
                ...state,
                filterlist:action.payload
            }
        case actionTypes.GETFILTERLIST:
            return{
                ...state,
                reslist:action.payload

            }

        default: return state
    }
}
export default filterList;