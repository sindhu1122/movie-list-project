import * as actionTypes from '../actions/action'
const initialState = {
    movie: [],
    username: '',
    password: '',
    display: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAMECHANGE:
            console.log(action.payload)
            return {
                ...state,
                username: action.payload
            }

        case actionTypes.PASSWORDCHANGE:
            return {
                ...state,
                password: action.payload
            }

        case actionTypes.SUBMIT:
            return {
                ...state,
                password: '',
                userName: ''
            }
        case actionTypes.MOVIELIST:
            return {
                ...state,
                movie: action.payload.movie
            }

        case actionTypes.EMAIL:

            return {
                ...state,
                email: action.payload
            }
        case actionTypes.ROLE:

            return {
                ...state,
                role: action.payload
            }

        case actionTypes.SET:
            return {
                ...state,
            }
        default: return state
    }
}
export default reducer;