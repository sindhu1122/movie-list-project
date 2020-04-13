import Signup from '../Components/Signup/Signup'
import { connect } from 'react-redux'
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
        setItem: (obj) =>
            dispatch({
                type: "SET",
                payload: obj
            }),
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
    userName: state.signUp.userName,
    password: state.signUp.password,
    email: state.signUp.email,
    role: state.signUp.role,
    data: state.signUp.data
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);