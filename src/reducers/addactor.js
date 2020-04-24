import * as actionTypes from '../actions/action'
const initialState = {

    actname: '',
    actage: '',
    actedit: '',
    actdelete: '',
    actupdate: '',
    editage: ''
}


const addactor = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTNAME:

            return {
                ...state,
                actname: action.payload
            }
        case actionTypes.ACTAGE:

            return {
                ...state,
                actage: action.payload
            }
        case actionTypes.ACTEDIT:
            return {
                ...state,
                actedit: action.payload
            }
        case actionTypes.ACTUPDATE:
            return {
                ...state,
                actupdate: action.payload
            }
        case actionTypes.ACTDELETE:
            return {
                ...state,
                actdelete: action.payload
            }
        case actionTypes.EDITAGE:
            return {
                ...state,
                editage: action.payload
            }
        case actionTypes.PERSONSUBMIT:
            return{
                ...state
            }
        case actionTypes.PERSONEDIT:
            return{
                ...state
            }
        case actionTypes.PERSONDELETE:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default addactor;