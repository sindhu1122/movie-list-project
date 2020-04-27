import { connect } from 'react-redux';
import AddDirector from '../Components/admin/Adddirector'
import addPerson from '../api/addPerson';
import editPerson from '../api/editPerson'
import deletePerson from '../api/deletePerson'
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
        directorSubmit: async (value) => {
            try {
                let res = await addPerson(value)
                dispatch({
                    type: "PERSONSUBMIT",
                    payload: res
                })
            }
            catch (error) {
                alert(error)
            }
        },
        directorUpdate: async (name, value) => {
            try {
                let res = await editPerson(name, value)
                dispatch({
                    type: "PERSONEDIT",
                    payload: res
                })
            }
            catch (error) {
                alert(error)
            }
        },
        directorDelete: async (name, value) => {
            try {
                let res = await deletePerson(name, value)
                dispatch({
                    type: "PERSONDELETE",
                    payload: res
                })
            }
            catch (error) {
                alert(error)
            }
        }

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