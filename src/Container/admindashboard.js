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
    submit: state.login.submit

})

export default connect(mapStateToProps, mapDispatchToProps)(Admin);