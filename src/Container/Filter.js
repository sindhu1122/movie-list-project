import Filter from '../Components/Filter/Filter'
import { connect } from 'react-redux'
import axios from 'axios'
const mapStateToProps = (state) => ({
    movie: state.signUp.movie,
    
})
export default connect(mapStateToProps,()=>{})(Filter);