import axios from 'axios'
const addFavouriteList = async (obj) => {
    let res = await axios.post('http://localhost:8000/addfavlist/' + obj.movie + '/' + obj.userName)
    if (res.data) {
        return true
    }
    else
        return false
}
export default addFavouriteList