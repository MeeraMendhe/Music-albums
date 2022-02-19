import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
const Navbar = () => {
  const [flag,setFlag]=useState(false)
  const [sort,setSort]=useState(false)
  const [data,setData]=useState([])
  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `http://localhost:1234/artist/artist_name?name=${val}`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(function (response) {
  //     //console.log(response, 'artist')
  //     setData(response.data)
  //     setFlag(true)
  //   })

  // }, [val])
  const handleArtist=()=>
  {
    setFlag(prev=>!prev)
  }
  const handleSort = () =>
  {
    setSort(prev=>!prev)
  }
  return (
    <div className={styles.flex}>
      <div className={styles.div}>
        <img
          src="https://i.pinimg.com/originals/e8/6a/e3/e86ae31f3047146140e271721aedf1d7.jpg"
          alt="icon"
        />
      </div>

      <div className={styles.inp}>
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </div>
      <button   onClick={handleArtist} className={styles.name}>
        Select By Name Of Artist
      </button>
      <button onClick={handleSort} className={styles.name}>
        Sort By year
      </button>
      <div>
        <button className={styles.login}>Login</button>
      </div>
      {
        flag?(
          <Navigate to="/artist"/>
        ):""
      }
      {
        sort?(
          <Navigate to="/sort"/>
        ):""
      }
    </div>
  )
}

export default Navbar
