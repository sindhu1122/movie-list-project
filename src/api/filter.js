import axios from 'axios'
const filterMovie=async(query)=>{
let res=await axios.get('http://localhost:8000/moviefilter'+query)
console.log(res.data.movie)
if(res)
{
    return res.data.movie
}
else{
    return false
}

}
export default filterMovie