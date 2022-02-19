import React, { useEffect } from 'react'
import axios from "axios";

const Guest = () => {
    useEffect(()=>
    {
     axios({
  method: 'get',
  url: 'http://localhost:1234/album',
  headers:{
      "Content-Type":"application/json"
  }
})
  .then(function (response) {
   console.log(response)
  });
    },[])

  return (
    <div>
      
    </div>
  )
}

export default Guest
