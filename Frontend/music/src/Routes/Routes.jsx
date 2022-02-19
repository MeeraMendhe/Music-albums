import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import AlbumDetail from '../Components/AlbumDetail/AlbumDetail'
import Albums from '../Components/Albums/Albums'
import Artist from '../Components/Artist/Artist'
import ArtistDetail from '../Components/Artist/ArtistDetail'
import Guest from '../Components/Guest/Guest'
import Home from '../Components/Home/Home'
import Sort from '../Components/Sort/Sort'
const Router = () => {
  return (
    <div>
        <Link to="/"></Link>
        <Link to="/guest"></Link>
        <Link to="/detail"/>
        <Link to="/detail/:id"/>
        <Link to="/artist"/>
        <Link to="/sort"/>
        <Link to="/artist/:id"/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/guest" element={<Guest/>}/>
         <Route path="/detail" element={<Albums/>}/>
         <Route path="/detail/:id" element={<AlbumDetail/>}/>
         <Route path="/artist" element={<Artist/>}/>
         <Route path="/artist/:id" element={<ArtistDetail/>}/>
         <Route path="/sort" element={<Sort/>}/>
       </Routes>
    </div>
  )
}

export default Router
