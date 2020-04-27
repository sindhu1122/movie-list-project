import axios from 'axios'
const addPerson = async (obj) => {
    console.log(obj)
    let res = await axios.post('http://localhost:8000/addactors', obj)

    if (res.data) {
        return true
    }
    else
        return false
}
export default addPerson