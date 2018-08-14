import React, {Component} from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import * as apiCalls from "./api";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.handleNewTodo = this.handleNewTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentWillMount() {
        this.fetchData();
    }
    async fetchData() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }
    async handleNewTodo(newTodo) {
        let new_todo = await apiCalls.createTodo(newTodo);
        this.setState({todos: [...this.state.todos, new_todo]})
    }
    async handleDelete(id) {
        await apiCalls.deleteTodo(id);
        let todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos});
    }
    async handleToggle(todo) {
        await apiCalls.updateTodo(todo);
        const todos = this.state.todos.map(t => (
            (t._id === todo._id) 
            ? {...t, completed: !t.completed}
            : t
        ))
        this.setState({todos});
    }
    render() {
        const todos = this.state.todos.map((t) => (
            <TodoItem 
            key={t._id}
            {...t}
            onDelete={this.handleDelete.bind(this, t._id)}
            onToggle={this.handleToggle.bind(this, t)}
            />
        ))
        return (
            <div className="todo-list">
                <TodoForm newTodo={this.handleNewTodo}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;