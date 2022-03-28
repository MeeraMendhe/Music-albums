import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./Sort.module.css"
import axios from "axios"
const Sort = () => {
    const [data,setData]=useState([])
    useEffect(()=>
    {
     axios({
  method: 'get',
  url: `http://localhost:1234/`,
  headers:{
      "Content-Type":"application/json"
  },
  })
  .then(function (response) {
  setData(response.data)
  });
    },[])
  return (
    <div>
    <Navbar/>
      <div className={styles.back}>
          <button className={styles.btn}>New to old</button>
          <button className={styles.btn}>
              Old to new
          </button>
          {

          }
      </div>
    </div>
  )
}

export default Sort
