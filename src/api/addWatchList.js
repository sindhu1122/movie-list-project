import axios from 'axios'
const addWatchList=async(obj)=>{
    let res=await axios.post('http://localhost:8000/addwatchlist/'+obj.movie+'/'+obj.userName)
    if(res.data)
    {
        return true
    }
    else
    return false
}
export default addWatchList