import React, {Component} from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const APIURL = "api/todos/";

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
        try {
            const resp = await fetch(APIURL);
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    let data = await resp.json();
                    let err = {errorMessage: data.message};
                    throw err;
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding!'};
                    throw err;
                }
            }
            let todos = await resp.json();
            this.setState({todos});
            return;
        } catch (e) {
            console.log(e)
        }
    }
    async handleNewTodo(newTodo) {
        try {
            const resp = await fetch(APIURL, {
                method: "post",
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({name: newTodo})
            });
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    let data = await resp.json();
                    let err = {errorMessage: data.message};
                    throw err;
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding!'};
                    throw err;
                }
            }
            let new_todo = await resp.json();
            this.setState({todos: [...this.state.todos, new_todo]})
        } catch (e) {
            console.log(e);
        }
    }
    async handleDelete(id) {
        try {
            const deleteURL = APIURL + id;
            const resp = await fetch(deleteURL, {
                method: "delete"
            });
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    let data = await resp.json();
                    let err = {errorMessage: data.message};
                    throw err;
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding!'};
                    throw err;
                }
            }
            const todos = this.state.todos.filter(todo => todo._id !== id);
            console.log(todos);
            this.setState({todos});

        } catch(e) {
            console.log(e);
        }
    }
    async handleToggle(todo) {
        try {
            const updateURL = APIURL + todo._id;
            const resp = await fetch(updateURL, {
                method: "put",
                header: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({completed: !todo.completed})
            })
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    let data = await resp.json();
                    let err = {errorMessage: data.message};
                    throw err;
                } else {
                    let err = {errorMessage: 'Please try again later, server is not responding!'};
                    throw err;
                }
            }
            const todos = this.state.todos.map(t => (
                (t._id === todo._id) 
                ? {...t, completed: !t.completed}
                : t
            ))
            this.setState({todos});
        } catch (e) {
            console.log(e);
        }
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