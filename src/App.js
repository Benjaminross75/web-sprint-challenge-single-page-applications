import React,{useState, useEffect} from "react";
import {Route, Routes, Link} from "react-router-dom"
import PizzaForm from "./PizzaForm";
import Home from "./Home"

export default function App(props){
  return (


    <div className="app">
      <h1>Lambda Eats</h1>
      <button id="homeBtn">Home</button>
      <button id="helpBtn">Help</button>

      <div className="form-link">
        <Link to='/'>Home</Link>
        <Link to='pizza-form'>Click here to order</Link>
      </div>
      <nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='pizza-form' element={<PizzaForm items={props}/>}/>
        </Routes>
      </nav>
      </div>


  );
};
