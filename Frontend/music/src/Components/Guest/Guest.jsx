import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from "./Guest.module.css"
import Albums from '../Albums/Albums';
import Navbar from '../Navbar/Navbar';

const Guest = () => {
    const [data,setData]=useState([])
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
  setData(response.data)
  });
    },[])
 console.log(data)
  return (
   <div>
     <Navbar/>
         <div className={styles.back}>
  <div>
      <h1>Albums</h1>
      <div className={styles.grid}>
          {
              data.map((e)=>
              (
                  <Albums key={e.id} {...e}/>
              ))
          }
      </div>
  </div>
    </div>
   </div>
  )
}

export default Guest
