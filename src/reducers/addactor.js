import * as actionTypes from '../actions/action'
const initialState = {

    name: '',
    age: '',
    nameToBeEdited: '',
    nameToBeDeleted: '',
    nameToBeUpdated: '',
    ageToBeUpdated: ''
}


const addactor = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTNAME:

            return {
                ...state,
                name: action.payload
            }
        case actionTypes.ACTAGE:

            return {
                ...state,
                age: action.payload
            }
        case actionTypes.ACTEDIT:
            return {
                ...state,
                nameToBeEdited: action.payload
            }
        case actionTypes.ACTUPDATE:
            return {
                ...state,
                nameToBeUpdated: action.payload
            }
        case actionTypes.ACTDELETE:
            return {
                ...state,
                nameToBeDeleted: action.payload
            }
        case actionTypes.EDITAGE:
            return {
                ...state,
                ageToBeUpdated: action.payload
            }
        case actionTypes.PERSONSUBMIT:
            return {
                ...state
            }
        case actionTypes.PERSONEDIT:
            return {
                ...state
            }
        case actionTypes.PERSONDELETE:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default addactor;