import axios from 'axios'
const addMovie = async (name, value) => {
    let res = await axios.post('http://localhost:8000/addreview/' + name, { review: value })
    if (res.data) {
        return true
    }
    else
        return false
}
export default addMovie