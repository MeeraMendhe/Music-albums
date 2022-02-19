import React from 'react'
import styles from "./Albums.module.css"
import {Navigate} from "react-router-dom"
import Navbar from '../Navbar/Navbar'
const Albums = ({album_name,image,_id}) => {
    const handleClick = ()=>
    {
      <Navigate to="detail" /> 
    }
  return (
    
  <div>
<div className={styles.div}>
  <img onClick={handleClick} src={image} alt=""/>
</div>
</div>
  )
}

export default Albums
