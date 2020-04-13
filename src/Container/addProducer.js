import { connect } from 'react-redux';
import AddProducer from '../Components/admin/AddProducer'
const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "PRODNAME",
                payload: value.target.value
            }),
        onAgeChange: (value) => {
            dispatch({
                type: "PRODAGE",
                payload: value.target.value
            })
        },
        onNameChangeEdit: (value) =>
            dispatch({
                type: "PRODNAMEEDIT",
                payload: value.target.value
            }),
        onNameChangeDelete: (value) =>
            dispatch({
                type: "PRODNAMEDELETE",
                payload: value.target.value
            }),
        onNameChangeUpdate: (value) =>
            dispatch({
                type: "PRODNAMEUPDATE",
                payload: value.target.value
            }),

    };
};
const mapStateToProps = (state) => {
    return {

        name: state.addproducer.prodname,
        age: state.addproducer.prodage,
        edit: state.addproducer.edit,
        delete: state.addproducer.delete,
        update: state.addproducer.update
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProducer);