import React,{useState} from "react";

function MyComponent1 (){
    const [cars,setCars] =useState([]);
    const [carsYear,setCarsYear]= useState(new Date (). getFullYear ());
    const [carsMake,setCarsMake] = useState("");
    const [carsModel, setCarsModel] = useState("");

    function handleAddCar(event){
        const newCar ={year : carsYear,
                              make : carsMake,
                              model : carsModel};
        setCars(cars => [...cars,newCar]);
        setCarsYear(new Date().getFullYear());
        setCarsMake("");
        setCarsModel("");
    }

    function handleRemoveCar(index) {
    setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarsYear(event.target.value);
    }
    function handleMakeChange(event){
         setCarsMake(event.target.value);

    }
    function handleModelChange(event){
         setCarsModel(event.target.value);
    }
    return(<div>

            <h2> List of Car objects</h2>
            <ul>
                {cars.map((cars, index) =>
                <li key ={index} onClick={() =>handleRemoveCar(index)}>
                    {cars.year} {cars.make} {cars.model}

                </li>)}
            </ul>
            <input type="number" value={carsYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carsMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
            <input type="text" value={carsModel} onChange={handleModelChange}
            placeholder="Enter car Model"/><br/>
            <button onClick={handleAddCar}>Add Car </button>
    </div>)
}
export default MyComponent1;