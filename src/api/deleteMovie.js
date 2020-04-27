import axios from 'axios'
const deleteMovie = async (name) => {
    console.log("hii")
    let res = await axios.delete('http://localhost:8000/deletemovie/' + name)

    if (res.data) {
        return true
    }
    else
        return false
}
export default deleteMovie