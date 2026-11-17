import React,{useState} from "react";
function Quantity(){
    const product="wireless Mouse";
    const price=500;
    const[quantity,SetQualtity]=useState(0);

    const increase = () => {
        SetQualtity(quantity + 1);
    };
    const decrease =()=> {
        if (quantity > 0){
            SetQualtity(quantity - 1);
        }
        
    }
    const reset =() => {
        SetQualtity(0);
    }
    const totalprice = price * quantity;
    return(
        <div>
            <h1>products</h1>
            <h2>{product}</h2>
            <p>Price :{price}</p>
            <h3> Quantity:{quantity}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
            <h2> total price:{totalprice}</h2>
        </div>
    );
}
export default Quantity;