import React from 'react'
import Nav1 from './Units/Nav1'
import Home from './Pages/Home'
import AddBlog from './Pages/AddBlog'
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <div>
      <Nav1></Nav1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBlog.jsx" element={<AddBlog />} />
      </Routes>
    </div>
  )
}