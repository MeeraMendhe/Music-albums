import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import styles from "./Home.module.css"
const Home = () => {
  const [flag,setFlag]=useState(false)
  const handleClick = ()=>
  {
    setFlag(prev=>!prev)
  }
  return (
    <div className={styles.back}>
      <h1 className={styles.color}>Welcome To Music Album</h1>
      <button className={styles.btn} onClick={handleClick}>Start</button>
      {
        flag?(
          <Navigate to="/guest"/>
        ):""
      }
    </div>
  )
}

export default Home
