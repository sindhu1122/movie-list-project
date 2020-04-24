import React from 'react'
import axios from 'axios'
const searchmovie=async(movie)=>{
    let s;
    let res=await axios.get('http://localhost:8000/getmovie/'+movie)
   console.log(res.data.movie[0])
        if(res.data)
        {
         return res.data.movie[0]
        }
        else{
            return false
        }
        
}
export default searchmovie;