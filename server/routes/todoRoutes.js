const express = require('express');

const { createTodo, getTodos, deleteTodoWithID } = require('../controllers/todoController.js')

const router = express.Router()



//Create a Todo
router.post("/", createTodo)

// Get all Todos
router.get("/", getTodos)

// Delete Todo
router.delete("/:id", deleteTodoWithID)

module.exports = router;