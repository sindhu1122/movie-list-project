import axios from 'axios'
const login=async(obj)=>{
    let res=await axios.post('http://localhost:8000/login',obj)
    if(res.data)
    return res.data
    else
    return false
    
}
export default login;