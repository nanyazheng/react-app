const express = require('express');
const app = express();
const todoRoutes = require("./routes/todoList");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send({message: 123});
})

app.use('/api/todos', todoRoutes);
app.listen(3001, () => {
    console.log("todoList api runs on port 3001")
})