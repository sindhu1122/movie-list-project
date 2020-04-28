import React from 'react'
import axios from 'axios'
const searchmovie = async (movie) => {
   let s;
   console.log(movie)
   let res = await axios.get('http://localhost:8000/getmovie/' + movie)
   console.log(res.data.msg)
   if (res.data.msg) {
      return res.data.movie[0]
   }
   else {
      return res.data.msg
   }

}
export default searchmovie;