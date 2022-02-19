import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from "./Guest.module.css"
import Albums from '../Albums/Albums';
import Navbar from '../Navbar/Navbar';

const Guest = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    useEffect(()=>
    {
     axios({
  method: 'get',
  url: `http://localhost:1234/album?page=${page}`,
  headers:{
      "Content-Type":"application/json"
  },
})
  .then(function (response) {
  setData(response.data)
  });
    },[page])
 //console.log(data)
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
      <button className={styles.btn}disabled={page===1} onClick={()=>setPage(prev=>prev-1)}>Previous</button>
      <button className={styles.btn} onClick={()=>setPage(prev=>prev+1)}>Next</button>
    
  </div>
    </div>
   </div>
  )
}

export default Guest
