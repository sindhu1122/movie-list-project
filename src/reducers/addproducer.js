import * as actionTypes from '../actions/action'
const initialState = {

    name: '',
    age: '',
    nameToBeEdited: '',
    nameToBeDeleted: '',
    nameToBeUpdated: ''
}


const addproducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODNAME:

            return {
                ...state,
                name: action.payload
            }
        case actionTypes.PRODAGE:

            return {
                ...state,
                age: action.payload
            }
        case actionTypes.PRODNAMEEDIT:

            return {
                ...state,
                nameToBeEdited: action.payload
            }
        case actionTypes.PRODNAMEDELETE:

            return {
                ...state,
                nameToBeDeleted: action.payload
            }
        case actionTypes.PRODNAMEUPDATE:

            return {
                ...state,
                nameToBeUpdated: action.payload
            }


        default:
            return state;
    }
}
export default addproducer;
