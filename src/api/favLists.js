import axios from 'axios'
const favLists = async (user) => {
    let res = await axios.get('http://localhost:8000/getfavlist/' + user)
    console.log(res.data.movieslist)
    if (res) {
        return res.data.movieslist
    }
    else {
        return false
    }

}
export default favLists