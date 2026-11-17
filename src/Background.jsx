import React, { useState } from "react";

function Background(){
    const[color,SetColor]= useState("white");

    function handleColorChange(event){
        SetColor(event.target.value);
        console.log(color);
    }
    return (
        <div 
        style={{ 
            backgroundColor:color,
            textAlign:"center",
            padding:"20px"
        }}
        >
            <h1>Color Change </h1>
            <input type="text" placeholder="Enter a color name" value={color} onChange={handleColorChange}/>
            <h2> Enter color : {color}</h2>
        </div>
    )

}
export default Background;