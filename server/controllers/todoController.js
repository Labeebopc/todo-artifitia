const mongoose = require('mongoose')
const { TodoSchema } = require('../models/todoModel.js')



const Todos = mongoose.model("Todos", TodoSchema)

const createTodo = async (req, res) => {
    console.log(req.body.data);
    const { todo, priority } = req.body.data
    try {
        const result = await Todos.create({ todo: todo, priority: priority })
        res.status(201).json({ success: true, result, message: "Todo Successfuly Created" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}


const getTodos = async (req, res) => {

    try {
        const result = await Todos.find()
        res.status(201).json({ success: true, result, message: "Todos are Successfuly Fetched" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}

const deleteTodoWithID = async (req, res) => {
    const todoId = req.params.id;
    let result;

    try {
        result = await Todos.deleteOne({ _id: todoId })

    } catch (error) {
        return res.status(400).json({ success: false })

    }

    return res.status(200).json({ success: true, message: "Todo Deleted Successfully" })

}


module.exports = { createTodo, getTodos, deleteTodoWithID }
