import * as actionTypes from '../actions/action'
const initialState = {
    movie: [],
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
            return{
                ...state,
                movie:action.payload.movie
            }


        // case actionTypes.GET:
        //     console.log(state.username)
        //     console.log(localStorage.getItem(state.username))
        //     return {
        //         ...state,
        //         data: JSON.parse(localStorage.getItem(state.username))
        //     }
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
            // console.log(state.data)
            // console.log(action.payload)
        
            return {
                ...state,
            }
        default: return state
    }
}
export default reducer;