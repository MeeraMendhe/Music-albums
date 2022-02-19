import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import AlbumDetail from '../Components/AlbumDetail/AlbumDetail'
import Albums from '../Components/Albums/Albums'
import Guest from '../Components/Guest/Guest'
import Home from '../Components/Home/Home'
const Router = () => {
  return (
    <div>
        <Link to="/"></Link>
        <Link to="/guest"></Link>
        <Link to="/detail"/>
        <Link to="/detail/:id"/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/guest" element={<Guest/>}/>
         <Route path="/detail" element={<Albums/>}/>
         <Route path="/detail/:id" element={<AlbumDetail/>}/>
       </Routes>
    </div>
  )
}

export default Router
