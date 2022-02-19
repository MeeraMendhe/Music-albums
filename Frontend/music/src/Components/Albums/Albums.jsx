import React, { useState } from 'react'
import styles from "./Albums.module.css"
import {Navigate} from "react-router-dom"
const Albums = ({image,_id}) => {
  const [flag,setFlag]=useState(false)
    const handleClick = ()=>
    {
     setFlag(prev=>!prev) 
    }
  return (
    
  <div key={_id}>
<div className={styles.div}>
  <img onClick={handleClick} src={image} alt=""/>
</div>
{
    flag?(
      <Navigate to={"/detail/"+_id}  />
    ):""
}
</div>
  )
}

export default Albums
