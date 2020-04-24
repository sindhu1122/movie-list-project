import { connect } from 'react-redux';
import AddProducer from '../Components/admin/AddProducer'
import addPerson from '../api/addPerson'
import editPerson from '../api/editPerson'
import deletePerson from '../api/deletePerson'
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
            producerSubmit:async(value)=>{
                try{
                    console.log(value)
                    let res=await addPerson(value)
                    dispatch({
                        type: "PERSONSUBMIT",
                        payload: res
                    })
                }
                catch(error){
                    alert(error)
                }
            },
            producerUpdate:async(name,value)=>{
                try{
                    let res=await editPerson(name,value)
                    dispatch({
                        type: "PERSONEDIT",
                        payload: res
                    })
                }
                catch(error){
                    alert(error)
                }
            },
            producerDelete:async(name,value)=>{
                try{
                    let res=await deletePerson(name,value)
                    dispatch({
                        type: "PERSONDELETE",
                        payload: res
                    })
                }
                catch(error){
                    alert(error)
                }
            }

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