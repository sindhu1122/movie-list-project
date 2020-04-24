import axios from 'axios'
const deletePerson=async(name)=>{
    console.log("hii")
    let res=await axios.delete('http://localhost:8000/deleteperson/'+name)
   
    if(res.data)
    {
        return true
    }
    else
    return false
}
export default deletePerson