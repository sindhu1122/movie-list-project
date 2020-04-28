import { connect } from 'react-redux';
import AddActress from '../Components/admin/Addactress'
import addPerson from '../api/addPerson'
import editPerson from '../api/editPerson'
import deletePerson from '../api/deletePerson'
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
        actressSubmit: async (value) => {
            try {
                let res = await addPerson(value)
                dispatch({
                    type: "PERSONSUBMIT",
                    payload: res
                })
            }
            catch (err) { alert("cannot add actress") }
        },
        actorUpdate: async (name, value) => {
            try {
                let res = await editPerson(name, value)
                dispatch({
                    type: "PERSONEDIT",
                    payload: res
                })
            }
            catch (err) { alert("cannot edit actress") }
        },
        actorDelete: async (name) => {
            try {
                let res = await deletePerson(name)
                dispatch({
                    type: "PERSONDELETE",
                    payload: res
                })
            }
            catch (err) { alert("cannot Delete actress") }

        }




    };
};
const mapStateToProps = (state) => {
    return {

        name: state.addactress.name,
        age: state.addactress.age,
        nameToBeEdited: state.addactress.nameToBeEdited,
        nameToBeUpdated: state.addactress.nameToBeUpdated,
        nameToBeDeleted: state.addactress.nameToBeDeleted,
        ageToBeUpdated: state.addactress.ageToBeUpdated
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActress);