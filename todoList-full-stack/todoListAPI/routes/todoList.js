const express = require('express');
const router = express.Router();
var todoData = require("../data");

router.get('/', async (req, res) => {
    try {
        const todos = await todoData.find();
        res.json(todos);
    } catch (e) {
        res.send(e);
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newTodo = await todoData.create(req.body);
        res.json(newTodo);
    } catch (e) {
        res.send(e);
    }
})

router.get('/:todoId', async (req, res) => {
    try {
        const todo = await todoData.findById(req.params.todoId);
        res.json(todo);
    } catch (e) {
        res.send(e);
    }
})

router.put('/:todoId', async (req, res) => {
    try {
        const todo = await todoData.findByIdAndUpdate(req.params.todoId, req.body);
        res.json(todo);
    } catch (e) {
        res.send(e);
    }
})

router.delete('/:todoId', async(req, res) => {
    try {
        await todoData.findByIdAndRemove(req.params.todoId);
        res.json(todoData.find());
    } catch (e) {
        res.send(e);
    }
})


module.exports = router;