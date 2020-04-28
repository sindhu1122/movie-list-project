import SignIn from '../Components/Log/Log'
import { connect } from 'react-redux'
import login from '../api/login'
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
        onSubmit: async (value) => {
            try {
                let res = await login(value)
                console.log(res.msg)

                dispatch({
                    type: "LOG",
                    payload: res
                })
            }
            catch (error) {
                alert(error)
            }
        }


    };
};
const mapStateToProps = (state) => ({
    username: state.login.username,
    password: state.login.password,
    logged: state.login.logged,
    isLoggedIn: state.login.isLoggedIn,
    role: state.login.role

})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);