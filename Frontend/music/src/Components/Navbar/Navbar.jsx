import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.flex}>
       <div className={styles.div}>
       <img src="https://i.pinimg.com/originals/e8/6a/e3/e86ae31f3047146140e271721aedf1d7.jpg" alt="icon"/>
       </div>
       
       <div className={styles.inp}>
           <input type="text" placeholder="Search here"/>
           <button>Search</button>
       </div>
       <div className={styles.name1}>Select By Name Of Artist
       <select className={styles.select}  name="artist_name">
           <option value="arijit">Arijit Singh</option>
           <option value="">Neha Kakkar</option>
           <option value="">Anuv Jain</option>
       </select>
       </div>
       <div className={styles.name1}>Sort By year
       <select className={styles.select}  name="year">
           <option value="">New</option>
           <option value="">Old</option>
       </select></div>
       <div>
           <button className={styles.login}>Login</button>
       </div>
    </div>
  )
}

export default Navbar
