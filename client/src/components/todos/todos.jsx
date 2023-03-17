import React, { useState, useEffect } from "react";
import axios from "axios";
import './todos.css'
import TodoCount from "../todo-count/todo-count";

const Todos = () => {
    // For handling Todo
    const [todo, setTodo] = useState([])

    // For handling counts
    const [counts, setCounts] = useState({ cancel: 0, delete: 0, completed: 0 })

    // For getting all Todos
    useEffect(() => {
        const getAllTodos = async () => {
            let result = await axios.get("http://localhost:5000/api/v1/todo")
            setTodo(result.data.result)
        }

        getAllTodos()

    }, [todo])

    // For handling Delete button
    const handleDeleteTodo = (id) => {

        const deleteTodo = async () => {
            let result = await axios.delete(`http://localhost:5000/api/v1/todo/${id}`)
        }
        deleteTodo()
        
        setCounts({ ...counts, delete: counts.delete + 1 })
    }

    // For handling Cancel button
    const handleCancelTodo = (id) => {
        const cancelTodo = async () => {
            let result = await axios.delete(`http://localhost:5000/api/v1/todo/${id}`)
        }
        cancelTodo()
        setCounts({ ...counts, cancel: counts.cancel + 1 })
    }

    // For handling Complete button
    const handleCompleteTodo = (id) => {
        const completeTodo = async () => {
            let result = await axios.delete(`http://localhost:5000/api/v1/todo/${id}`)
        }
        completeTodo()
        setCounts({ ...counts, completed: counts.completed + 1 })
    }
    console.log(todo);

    return (
        <>
            <TodoCount pending={todo.length} counts={counts} />
            <section className="display-todo-container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Todo</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map((todo) => {
                                return (
                                    <tr key={todo._id}>
                                        <td>{todo.todo}</td>
                                        <td>{todo.priority}</td>
                                        <td className="todo-btn-row">
                                            <button onClick={() => handleCancelTodo(todo._id)} className="todo-btn-cancel">Cancel</button>
                                            <button onClick={() => handleDeleteTodo(todo._id)} className="todo-btn-delete">Delete</button>
                                            <button onClick={() => handleCompleteTodo(todo._id)} className="todo-btn-complete">Completed</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr>

                        </tr>
                    </tbody>
                </table>

            </section>
        </>
    )
}

export default Todos