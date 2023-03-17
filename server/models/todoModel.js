const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: { type: String, required: [true, "Please Enter a Todo"] },
    priority: { type: String, required: [true, "Please Enter the Priority"] },
})

module.exports = { TodoSchema }