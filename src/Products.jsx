import React,{useState,useEffect} from "react";
import axios from "axios";

function Products(){
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setProducts(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })
    },[])
    return(
        <div>
            <h1>Products List</h1>
            {products.map((products)=>
            <div key={products.id}>
                <h2>{products.title}</h2>
                <img src={products.image}width="100" alt={products.title}/>
                <p>price : $ {products.price}</p>
                <p>{products.category}</p>

            </div>
            )}
        </div>
    )
}
export default Products