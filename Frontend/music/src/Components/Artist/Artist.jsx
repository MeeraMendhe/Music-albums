import React, { useEffect, useState } from 'react'

import Navbar from '../Navbar/Navbar'
import styles from "./Artist.module.css"
import axios from "axios"
import Image from './Image'
const Artist = () => {
  const [data,setData]=useState([])
  
  useEffect(()=>
  {
   axios({
method: 'get',
url: `http://localhost:1234/artist`,
headers:{
    "Content-Type":"application/json"
},
})
.then(function (response) {
setData(response.data)
});
  },[])
 // console.log(data)




  return (
    <div >
      <Navbar/>
      <div className={styles.back}>
      <div className={styles.grid} >
      {
           data?data.map((e)=>(

              <Image key={e._id} {...e}/>   
           )):""
           
         }
      </div>
   
      </div>
    </div>
  )
}

export default Artist
