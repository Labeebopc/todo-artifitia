import React, { useState } from "react";
import axios from 'axios'
import "./home.css"



const Home = () => {
    // For setting Todo Data
    const [todoData, setTodoData] = useState({ todo: "", priority: "" })

    // For sending Todo on button click
    const handleTodo = () => {
        const postTodo = async () => {
            let result = await axios.post("http://localhost:5000/api/v1/todo", {
                data: todoData
            })
        }

        postTodo()
    }

    return (
        <>
            <section className="home-container">
                <h3>TODO App</h3>

                <section className="todo-section">
                    <input type="text" placeholder="Enter your TODO" onChange={e => setTodoData({ ...todoData, todo: e.target.value })} />
                    <select className="todo-dropdown" name="" id="" onChange={e => setTodoData({ ...todoData, priority: e.target.value })}>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <button onClick={handleTodo}>Add</button>
                </section>
            </section>
        </>
    )
}

export default Home;