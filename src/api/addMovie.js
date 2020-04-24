import axios from 'axios'
const addMovie=async(obj)=>{
    let res=await axios.post('http://localhost:8000/movieadd/',obj)
    if(res.data)
    {
        return true
    }
    else
    return false
}
export default addMovie