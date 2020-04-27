import { connect } from 'react-redux';
import AddActor from '../Components/admin/Addactor'
import addPerson from '../api/addPerson';
import editPerson from '../api/editPerson'
import deletePerson from '../api/deletePerson';

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
        actorSubmit: async (value) => {
            try {
                let res = await addPerson(value)
                dispatch({
                    type: "PERSONSUBMIT",
                    payload: res
                })
            }
            catch (err) { alert("cannot add actor") }
        },

        actorUpdate: async (name, value) => {
            try {
                let res = await editPerson(name, value)
                dispatch({
                    type: "PERSONEDIT",
                    payload: res
                })
            }
            catch (err) { alert("cannot edit actor") }
        },
        actorDelete: async (name) => {
            try {
                let res = await deletePerson(name)
                dispatch({
                    type: "PERSONDELETE",
                    payload: res
                })
            }
            catch (err) { alert("cannot Delete actor") }

        }



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