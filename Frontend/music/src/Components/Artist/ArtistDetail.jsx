import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import styles from "./Artist.module.css"
const ArtistDetail = () => {
    const id=useParams()
  return (
    <div>
     <Navbar/>
     <div className={styles.back}>
       <h1>{id.id}</h1>
     </div>
    </div>
  )
}

export default ArtistDetail
