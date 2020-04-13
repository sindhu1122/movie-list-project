import * as actionTypes from '../actions/action'
const initialState = {

    dirname: '',
    dirage: '',
    edit:'',
    delete:'',
    update:''
}


const adddirector = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DIRNAME:

            return {
                ...state,
                dirname: action.payload
            }
        case actionTypes.DIRAGE:

            return {
                ...state,
                dirage: action.payload
            }
        case actionTypes.DIRNAMEEDIT:

            return {
                ...state,
                edit: action.payload
            }
        case actionTypes.DIRNAMEDELETE:

            return {
                ...state,
                delete: action.payload
            }
        case actionTypes.DIRNAMEUPDATE:

            return {
                ...state,
                update: action.payload
            }

        default:
            return state;
    }
}

export default adddirector;
