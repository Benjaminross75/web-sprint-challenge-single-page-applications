import {useState, useEffect} from "react"
import {Routes, Route, } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'

export default function App(){


  return(
    <div className="container">
      <h1>Bloomtech Eats</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pizza' element={<Pizza/>}/>
      </Routes>
    </div>
  )
}
