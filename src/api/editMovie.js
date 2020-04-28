import axios from 'axios'
const editMovie = async (name, obj) => {
    console.log(name,obj)
    let res = await axios.put('http://localhost:8000/editmovie/' + name, obj)

    if (res.data) {
        return true
    }
    else
        return false
}
export default editMovie