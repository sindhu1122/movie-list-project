import * as actionTypes from '../actions/action'
import addPerson from '../api/addPerson'
const initialState = {

    actname: '',
    actage: '',
    actedit: '',
    actdelete: '',
    actupdate: '',
    editage:''
}


const addactress = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTRESSNAME:

            return {
                ...state,
                actname: action.payload
            }
        case actionTypes.ACTRESSAGE:

            return {
                ...state,
                actage: action.payload
            }
        case actionTypes.ACTRESSEDIT:
            return {
                ...state,
                actedit: action.payload
            }
        case actionTypes.ACTRESSUPDATE:
            return {
                ...state,
                actupdate: action.payload
            }
        case actionTypes.ACTRESSDELETE:
            return {
                ...state,
                actdelete: action.payload
            }
            case actionTypes.EDITAGEACTRESS:
                return {
                    ...state,
                    editage: action.payload
                }

        default:
            return state;
    }
}

export default addactress;