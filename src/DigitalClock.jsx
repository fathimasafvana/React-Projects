import React,{useState,useEffect} from "react";
function DigitalClock(){
    const[time,setTime] =useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        } ,1000);
        return()=>{
            clearInterval(intervalId);
        };
    },[]);
    
    return (
        <div className="clock-container">
            <h1>Digital Clock</h1>
            
            <h2>{time.toLocaleTimeString()}</h2>
            <h2>{time.toDateString}</h2>
        </div>

    );
}
export default DigitalClock;