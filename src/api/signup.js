import axios from 'axios'
const signup = async (obj) => {
    let res = await axios.post('http://localhost:8000/signup', obj)
    if (res.data)
        return res.data
    else
        return false
}
export default signup;