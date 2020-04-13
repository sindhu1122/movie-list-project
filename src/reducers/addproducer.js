import * as actionTypes from '../actions/action'
const initialState = {

    prodname: '',
    prodage: '',
    edit: '',
    delete: '',
    update: ''
}


const addproducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODNAME:

            return {
                ...state,
                prodname: action.payload
            }
        case actionTypes.PRODAGE:

            return {
                ...state,
                prodage: action.payload
            }
        case actionTypes.PRODNAMEEDIT:

            return {
                ...state,
                edit: action.payload
            }
        case actionTypes.PRODNAMEDELETE:

            return {
                ...state,
                delete: action.payload
            }
        case actionTypes.PRODNAMEUPDATE:

            return {
                ...state,
                update: action.payload
            }


        default:
            return state;
    }
}
export default addproducer;
