import * as actionTypes from '../actions/action'
const initialState = {
    filterlist:'',
    reslist:''
}
const filterList = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FILTERLISTACTORS:
            console.log(action.payload)
            return {
                ...state,
                filterlist:action.payload
            }
        case actionTypes.GETFILTERACTORS:
            return{
                ...state,
                reslist:action.payload

            }

        default: return state
    }
}
export default filterList;