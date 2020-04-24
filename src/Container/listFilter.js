import ListFilter from '../Components/Listactors/Listactors'
import { connect } from 'react-redux'
import axios from 'axios'
const mapStateToProps = (state) => ({
    movie: state.signUp.movie,
    
})
export default connect(mapStateToProps)(ListFilter);