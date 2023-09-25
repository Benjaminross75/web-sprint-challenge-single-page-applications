import react from 'react'
import {useState, useEffect} from "react"
import {Routes, Route, } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
const initialValues = {
  choiceOfSize: '',
  choiceOfSauce:'',
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  onions:false,
  glutenFree: false,
  specialInstructions:''

}
export default function App(){
const [formValues, setFormValues] = useState(initialValues)

  return(
    <div className="container">
      <h1>Bloomtech Eats</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pizza' element={<Pizza values={formValues}/>}/>
      </Routes>
    </div>
  )
}
