import Listfilter from '../Components/Listactors/Listactors'
import { connect } from 'react-redux'
import filterActors from '../api/filterActors'
const mapStateToProps = (state) => ({
    movie: state.signUp.movie,
    filterlist: state.listActors.filterlist,
    reslist: state.listActors.reslist

})
const mapDispatchToProps = dispatch => {
    return {
        filterList: (value) => {
            console.log(value)
            dispatch({
                type: "FILTERLISTACTORS",
                payload: value
            })
        },
        getList: async (value) => {
            console.log(value)
            try {

                let res = await filterActors(value)
                dispatch({
                    type: "GETFILTERACTORS",
                    payload: res

                })
            }
            catch (error) {
                alert(error)
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Listfilter);