import * as actionTypes from '../actions/action'
const initialState = {
    favlist:'',
    watchlist:''
}
const search = (state = initialState, action) => {
    switch(action.type)
    {
    
    case actionTypes.FAVLISTS:
        let user=action.payload
        let data=JSON.parse(localStorage.getItem(user))
        return{
            ...state,
            favlist:data.favlist
        }
    
       
        case actionTypes.WATCHLIST:
            let user1=action.payload
            let data1=JSON.parse(localStorage.getItem(user1))
            return{
                ...state,
                watchlist:data1.watchlist
            }
   
    default:return state
}
}
export default search;