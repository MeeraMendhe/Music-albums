import React from 'react'
import { Navigate } from 'react-router-dom'
import styles from "./Home.module.css"
const Home = () => {
  const handleClick = ()=>
  {
    <Navigate to="/guest"/>
  }
  return (
    <div className={styles.back}>
      <h1 className={styles.color}>Welcome To Music Album</h1>
      <button className={styles.btn} onClick={handleClick}>Start</button>
    </div>
  )
}

export default Home
