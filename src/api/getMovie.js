import axios from 'axios'
const getMovies = async (user) => {
    let res = await axios.get('http://localhost:8000/getallmovies')
    //console.log(res.data.movieslist)
    if (res) {
        return res.data
    }
    else {
        return false
    }

}
export default getMovies