import * as actionTypes from '../actions/action'
const initialState = {
    movie: ["a", "c", "d", "e", "g", "l", "m", "f", "t", "l", "m", "h", "ik", "tg", "itr", "kit", "itur", "fgf", "fgg", "gffg", "fgdf", "fdgdfg", "gfh", "ghgfh"],
    username: '',
    password: '',
    submit: false,
    log: false,
    role: ''
}
const login = (state = initialState, action) => {
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

        case actionTypes.LOG:
            let l = JSON.parse(localStorage.getItem(state.username))
            console.log(l.role)
            if (state.username == "" || state.password == "") {
                alert("Enter Credentials")
                return {
                    ...state,
                    submit: false
                }
            }
            else {
                if (l) {
                    if (state.password !== l.password) {
                        alert("Wrong Password!Please give correct credentials")
                        return {
                            ...state,
                            submit: false
                        }
                    }
                    else {

                        alert("sigd")
                        return {
                            ...state,
                            submit: true,
                            log: true,
                            role: l.role
                        }
                    }
                }
                else {
                    alert("user ot exist")
                    return {
                        ...state,
                        submit: false
                    }

                }
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                submit: false,
                username: '',
                password: ''
            }
        default: return state
    }
}
export default login;