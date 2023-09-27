import react from 'react'
import {useState, useEffect} from "react"
import {Routes, Route, } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import axios from 'axios'
import *as yup from 'yup'
const initialValues = {
  name:'',
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
  name:'',
  choiceOfSize:'',
  choiceOfSauce: '',
  pepperoni:false,
  sausage: false,
  canadianBacon:false,
  onions: false,
  glutenFree: false,
  specialInstructions:''
}

const initialErrors = () =>({
  name: '',
  choiceOfSize: '',
  choiceOfSauce: '',
  pepperoni: '',
  sausage:'',
  canadianBacon:'',
  onions:'',
  glutenFree: '',
  specialInstructions:''

})
const userSchema = yup.object().shape({
  name: yup
  .string()
  .trim()
  .required('name is required')
  .min(2,'name must be at least 2 characters'),
  choiceOfSize: yup.string(),
  choiceOfSauce: yup.string(),
  pepperoni:yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  onions: yup.boolean(),
  glutenFree: yup.boolean(),
  specialInstructions: yup.string()
})

export default function App(){
  const [formValues, setFormValues] = useState(initialValues)
  const [pizza, setPizza] = useState([])
  const [errors, setErrors] = useState(initialErrors())

  const validate = (name, value) =>{
    yup.reach(userSchema, name)
    .validate(value)
    .then(()=> setErrors({...errors, [name]:''}))
    .catch(err=> setErrors({...errors, [name]:err.errors[0] }))
  }

const inputChange = (name,value)=>{
  validate(name,value)
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
    name: formValues.name,
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
        <Route path='/' element={<Home />}/>
        <Route path='/pizza' element={<Pizza values={formValues} inputChange={inputChange} submit={formSubmit} errors={errors}/>}/>
      </Routes>
    </div>
  )
}
