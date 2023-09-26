import react from 'react'
import {useState, useEffect} from "react"
import {Routes, Route, } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import axios from 'axios'
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

const initialPizza = {
  choiceOfSize:'',
  choiceOfSauce: '',
  pepperoni:false,
  sausage: false,
  canadianBacon:false,
  onions: false,
  glutenFree: false,
  specialInstructions:''
}
export default function App(){
  const [formValues, setFormValues] = useState(initialValues)
  const [pizza, setPizza] = useState([])
const inputChange = (name,value)=>{
  setFormValues({...formValues,[name]: value})
}

const postNewPizza = newPizza =>{

  axios.post('https://reqres.in/api/orders', newPizza)
  .then(res =>{
    console.log(res)
    setPizza([...pizza, res.data])
    setFormValues(initialValues)
  }).catch(err =>{ console.error(err)})
//console.log(pizza)
}
const formSubmit = () =>{
  console.log('suuubbbmit')
  const newPizza = {

    choiceOfSize: formValues.choiceOfSize,
    choiceOfSauce: formValues.choiceOfSauce,
    specialInstructions: formValues.specialInstructions,
    glutenFree: formValues.glutenFree,
    toppings:['pepperoni', 'sausage', 'canadianBacon', 'onions'].filter(topping=> !!formValues[topping])
  }
  postNewPizza(newPizza)
}

  return(
    <div className="container">
      <h1>Bloomtech Eats</h1>
      <Routes>
        <Route path='/'id='order-pizza' element={<Home />}/>
        <Route path='/pizza' element={<Pizza values={formValues} inputChange={inputChange} submit={formSubmit}/>}/>
      </Routes>
    </div>
  )
}
