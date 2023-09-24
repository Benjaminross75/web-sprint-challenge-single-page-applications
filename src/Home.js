import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function Home(){
const navigate = useNavigate()

const routeToPizzaForm = () =>{
    navigate("pizza-form")
}


return(
    <div className="home-wrapper">
        <h2>Order a pizza by clicking the link</h2>
         <button onCLick={routeToPizzaForm} id="order-pizza">Click to order</button>
    </div>
)
}
