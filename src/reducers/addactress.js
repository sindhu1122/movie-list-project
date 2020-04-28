import * as actionTypes from '../actions/action'
import addPerson from '../api/addPerson'
const initialState = {

    name: '',
    age: '',
    nameToBeEdited: '',
    nameToBeDeleted: '',
    nameToBeUpdated: '',
    ageToBeUpdated: ''
}


const addactress = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTRESSNAME:

            return {
                ...state,
                name: action.payload
            }
        case actionTypes.ACTRESSAGE:

            return {
                ...state,
                age: action.payload
            }
        case actionTypes.ACTRESSEDIT:
            return {
                ...state,
                nameToBeEdited: action.payload
            }
        case actionTypes.ACTRESSUPDATE:
            return {
                ...state,
                nameToBeUpdated: action.payload
            }
        case actionTypes.ACTRESSDELETE:
            return {
                ...state,
                nameToBeDeleted: action.payload
            }
        case actionTypes.EDITAGEACTRESS:
            return {
                ...state,
                ageToBeUpdated: action.payload
            }

        default:
            return state;
    }
}

export default addactress;