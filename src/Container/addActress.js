import { connect } from 'react-redux';
import AddActress from '../Components/admin/Addactress'


const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "ACTRESSNAME",
                payload: value.target.value
            }),
        onAgeChange: (value) => {
            dispatch({
                type: "ACTRESSAGE",
                payload: value.target.value
            })
        },
        onNameEdit: (value) =>
            dispatch({
                type: "ACTRESSEDIT",
                payload: value.target.value
            }),
        onNameUpdate: (value) => {
            dispatch({
                type: "ACTRESSUPDATE",
                payload: value.target.value
            })
        },
        onNameDelete: (value) => {
            dispatch({
                type: "ACTRESSDELETE",
                payload: value.target.value
            })
        },
        onAgeChangeEdit: (value) => {
            dispatch({
                type: "EDITAGEACTRESS",
                payload: value.target.value
            })
        },



    };
};
const mapStateToProps = (state) => {
    return {

        name: state.addactress.actname,
        age: state.addactress.actage,
        edit: state.addactress.actedit,
        update: state.addactress.actupdate,
        delete: state.addactress.actdelete,
        editage: state.addactress.editage
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActress);