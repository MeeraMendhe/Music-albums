import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import styles from "./AlbumDetail.module.css"
import axios from "axios"
const AlbumDetail = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
 const obj=useParams()
 //console.log(obj.id)
 useEffect(()=>
 {
   setLoading(true)
  axios({
method: 'get',
url: `http://localhost:1234/album/${obj.id}`,
headers:{
   "Content-Type":"application/json"
}
})
.then(function (response) {
//console.log(response.data)
setData(response.data)
setLoading(false)
});
 },[])
 console.log(data,"data")
  return loading?(
    <div>...Loading</div>
  ):(
    <div key={obj.id} >
      <Navbar/>
      <div className={styles.back}>
      <h1>{data?data.album_name:""}</h1>
      <img className={styles.image} src={data?data.image:""} alt=""/>
      <h3>{data?data.type:""}</h3>
      <h2>{data?data.year:""}</h2>
      {
        data?data.song.map((e)=>(
          <div className={styles.div}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHgrJ1QVN2i0_N9GNdYOAsoQLNurFO3DLJw&usqp=CAU" alt="icon"/>
            <h4 className={styles.text}>{e.duration}</h4>
            <h2 className={styles.text1}>{e.song_name}</h2>
           
          </div>
        )):""
      }
      </div>
    </div>
  )
}

export default AlbumDetail
