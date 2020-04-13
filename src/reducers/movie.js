import * as actionTypes from '../actions/action'
const initialState = {
    movienamewatch: '',
    movienamefav: ''
}
const movie = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADDWATCH:

            let a = action.payload.username
            let c = action.payload.mov
            let data = JSON.parse(localStorage.getItem(a))
            data.watchlist.push(c)
            localStorage.setItem(a, JSON.stringify(data))
            return {
                ...state,
                movienamewatch: c
            }
        case actionTypes.ADDFAVOURITE:

            let user = action.payload.username
            let movie = action.payload.mov
            let data1 = JSON.parse(localStorage.getItem(user))
            data1.favlist.push(movie)
            localStorage.setItem(user, JSON.stringify(data1))
            return {
                ...state,
                movienamefav: movie
            }
        default: return state
    }
}
export default movie