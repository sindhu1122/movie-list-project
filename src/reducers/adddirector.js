import * as actionTypes from '../actions/action'
const initialState = {

    name: '',
    age: '',
    nameToBeEdited: '',
    nameToBeDeleted: '',
    nameToBeUpdated: ''
}


const adddirector = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DIRNAME:

            return {
                ...state,
                name: action.payload
            }
        case actionTypes.DIRAGE:

            return {
                ...state,
                age: action.payload
            }
        case actionTypes.DIRNAMEEDIT:

            return {
                ...state,
                nameToBeEdited: action.payload
            }
        case actionTypes.DIRNAMEDELETE:

            return {
                ...state,
                nameToBeDeleted: action.payload
            }
        case actionTypes.DIRNAMEUPDATE:

            return {
                ...state,
                nameToBeUpdated: action.payload
            }

        default:
            return state;
    }
}

export default adddirector;
