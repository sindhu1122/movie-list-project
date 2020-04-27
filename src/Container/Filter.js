import Filter from '../Components/Filter/Filter'
import { connect } from 'react-redux'
import axios from 'axios'
import filter from '../api/filter'
const mapStateToProps = (state) => ({
    movie: state.signUp.movie,
    filterlist: state.filterList.filterlist,
    reslist: state.filterList.reslist

})
const mapDispatchToProps = dispatch => {
    return {
        filterList: (value) =>
            dispatch({
                type: "FILTERLIST",
                payload: value
            }),
        getList: async (value) => {
            try {

                let res = await filter(value)
                dispatch({
                    type: "GETFILTERLIST",
                    payload: res

                })
            }

            catch (error) {
                alert(error)
            }
        },
        display1: (value) =>
            dispatch({
                type: "DISPLAY",
                payload: value
            }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);