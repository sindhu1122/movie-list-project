import { connect } from 'react-redux';
import AddDirector from '../Components/admin/Adddirector'

const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "DIRNAME",
                payload: value.target.value
            }),
        onAgeChange: (value) => {
            dispatch({
                type: "DIRAGE",
                payload: value.target.value
            })
        },
        onNameChangeEdit: (value) =>
            dispatch({
                type: "DIRNAMEEDIT",
                payload: value.target.value
            }),
        onNameChangeDelete: (value) =>
            dispatch({
                type: "DIRNAMEDELETE",
                payload: value.target.value
            }),
        onNameChangeUpdate: (value) =>
            dispatch({
                type: "DIRNAMEUPDATE",
                payload: value.target.value
            }),

    };
};
const mapStateToProps = (state) => {
    return {

        name: state.adddirector.dirname,
        age: state.adddirector.dirage,
        edit: state.adddirector.edit,
        delete: state.adddirector.delete,
        update: state.adddirector.update
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDirector);