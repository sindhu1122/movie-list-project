import axios from 'axios'
const editPerson = async (name, obj) => {
    console.log("hii")
    let res = await axios.put('http://localhost:8000/editactor/' + name, obj)

    if (res.data) {
        return true
    }
    else
        return false
}
export default editPerson