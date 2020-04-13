import { connect } from 'react-redux';
import AddActor from '../Components/admin/Addactor'


const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "ACTNAME",
                payload: value.target.value
            }),
        onAgeChange: (value) => {
            dispatch({
                type: "ACTAGE",
                payload: value.target.value
            })
        },
        onNameEdit: (value) =>
            dispatch({
                type: "ACTEDIT",
                payload: value.target.value
            }),
        onNameUpdate: (value) => {
            dispatch({
                type: "ACTUPDATE",
                payload: value.target.value
            })
        },
        onNameDelete: (value) => {
            dispatch({
                type: "ACTDELETE",
                payload: value.target.value
            })
        },
        onAgeChangeEdit: (value) => {
            dispatch({
                type: "EDITAGE",
                payload: value.target.value
            })
        },



    };
};
const mapStateToProps = (state) => {
    return {

        name: state.addactor.actname,
        age: state.addactor.actage,
        edit: state.addactor.actedit,
        update: state.addactor.actupdate,
        delete: state.addactor.actdelete,
        editage: state.addactor.editage
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActor);