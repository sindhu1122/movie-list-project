import SignIn from '../Components/Log/Log'
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
        onSubmit: () =>
            dispatch({
                type: "LOG"
            })



    };
};
const mapStateToProps = (state) => ({
    username: state.login.username,
    password: state.login.password,
    log: state.login.log,
    submit: state.login.submit,
    role: state.login.role

})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);