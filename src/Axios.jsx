
import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
    const[users,setUsers] = useState ([]);

    async function getUsers(){

        const response = await axios.get(
             "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
    }
    useEffect(() => {
        getUsers();
    },[]);
    
    
    return(
        <div>
            <h1>User List</h1>
            {users.map((users)=>(
                <p key={users.id}>{users.name}</p>
            ))}
        </div>
    )
}

export default Axios;
