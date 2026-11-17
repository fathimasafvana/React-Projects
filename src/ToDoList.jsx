
import React, { useState, useEffect } from "react";

function App() {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState("");
    const [editId, setEditId] = useState(null);

    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    
    function handleSubmit() {

        if (newTask.trim() === "") {
            alert("Please enter a task");
            return;
        }

        if (editId !== null) {

            const updatedTasks = tasks.map((task) => {
                if (task.id === editId) {
                    return { ...task, text: newTask };
                }
                return task;
            });

            setTasks(updatedTasks);
            setEditId(null);

        } else {

            const task = {
                id: Date.now(),
                text: newTask,
                completed: false
            };

            setTasks([...tasks, task]);
        }

        setNewTask("");
    }

    // Mark Task Completed
    function toggleTask(id) {

        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTasks(updatedTasks);
    }

    // Edit Task
    function editTask(task) {
        setNewTask(task.text);
        setEditId(task.id);
    }

    // Delete Task
    function deleteTask(id) {

        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });

        setTasks(updatedTasks);
    }

    return (
        <div className="container">

            <h1>Todo Application</h1>

            <input
                type="text"
                placeholder="Enter your task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button onClick={handleSubmit}>
                {editId !== null ? "Update" : "Add Task"}
            </button>

            <h2>My Tasks</h2>

            {tasks.length === 0 && <p>No tasks available</p>}

            {tasks.map((task) => (

                <div className="task" key={task.id}>

                    <span
                        onClick={() => toggleTask(task.id)}
                        style={{
                            textDecoration: task.completed
                                ? "line-through"
                                : "none"
                        }}
                    >
                        {task.text}
                    </span>

                    <button onClick={() => toggleTask(task.id)}>
                        {task.completed ? "Undo" : "Complete"}
                    </button>

                    <button onClick={() => editTask(task)}>
                        Edit
                    </button>

                    <button onClick={() => deleteTask(task.id)}>
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default App;
