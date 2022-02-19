import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import styles from "./Artist.module.css"
const Image = ({artist_name,_id,profile}) => {
    const [flag,setFlag]=useState(false)
    const handleClick = () => {
        setFlag(true)
      }
  return (
    <div  className={styles.img}>
         <img src={profile} alt=""/>
         <button className={styles.btn}onClick={handleClick}>{artist_name}</button>
         <div key={_id}>
               {
               flag?(<Navigate to={`/artist/${_id}`}/>):""
             }
               </div>
    </div>
  )
}

export default Image
