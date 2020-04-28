import Admin from '../Components/admin/admidashboard/admidashboard'
import { connect } from 'react-redux'
const mapDispatchToProps = dispatch => {
    return {

        onSubmit: () =>
            dispatch({
                type: "LOGOUT"
            })



    };
};
const mapStateToProps = (state) => ({
    role: state.login.role,
    isLoggedIn: state.login.isLoggedIn

})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);