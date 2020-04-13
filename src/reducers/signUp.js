import * as actionTypes from '../actions/action'
const initialState = {
    movie: ["a", "c", "d", "e", "g", "l", "m", "f", "t", "l", "m", "h", "ik", "tg", "itr", "kit", "itur", "fgf", "fgg", "gffg", "fgdf", "fdgdfg", "gfh", "ghgfh"],
    username: '',
    password: '',
    data: '',
    moviecha: '',
    chage: false,
    movie1: [],
    display: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAMECHANGE:
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



        case actionTypes.GET:
            console.log(state.username)
            console.log(localStorage.getItem(state.username))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem(state.username))
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
            console.log(state.data)
            console.log(action.payload)
            localStorage.setItem(state.username, JSON.stringify(action.payload))
            return {
                ...state,
                data: JSON.parse(localStorage.getItem(state.username))
            }
        default: return state
    }
}
export default reducer;