import React,{useState} from "react";
function Toggle(){
     const[isVisible,setIsVisible] = useState();

     function toggle(){
        setIsVisible (prev => !prev);

     }
     return (

        <div>
            <button onClick={toggle}>Toggle</button>
            {isVisible && <h1>Hello React</h1>}
        </div>

     )
}