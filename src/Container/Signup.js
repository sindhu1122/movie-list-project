import Signup from '../Components/Signup/Signup'
import { connect } from 'react-redux'
import axios from 'axios'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "NAMECHANGE",
                payload: value
            }),
        onPasswordChange: (value) =>
            dispatch({
                type: "PASSWORDCHANGE",
                payload: value
            }),

        getItem: () =>
            dispatch({
                type: "GET",
            }),
        setItem: async(obj) =>
        {let res=await axios.post('http://localhost:8000/signup',obj)
        .then(function (response) {
            console.log(response);
            alert(response.data.message);
            
        })
        console.log(res)
            dispatch({
                type: "SET",
                payload: res
            })},
        setEmail: (value) =>
            dispatch({
                type: "EMAIL",
                payload: value
            }),
        setRole: (value) =>
            dispatch({
                type: "ROLE",
                payload: value
            }),

    };
};
const mapStateToProps = (state) => ({
    username: state.signUp.username,
    password: state.signUp.password,
    email: state.signUp.email,
    role: state.signUp.role,
    data: state.signUp.data
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);