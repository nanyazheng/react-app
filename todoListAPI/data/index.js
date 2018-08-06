const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");
mongoose.Promise = Promise;

const todosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "name is needed!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
