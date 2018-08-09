import React, {Component} from "react";
//import TodoForm from "./TodoForm";
//import TodoItem from "./TodoItem";
const APIURL = "api/todos";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.handleNewTodo = this.handleNewTodo.bind(this);
    }
    handleNewTodo(newTodo) {
        this.setState({todos: [...this.state.todos, newTodo]});
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
    render() {
        //const {todos} = this.state;
        return (
            <div className="todo-list">
                {/* <TodoForm newTodo={this.handleNewTodo}/>
                <ul>
                    {todos}
                </ul> */}
                <h1>todos</h1>
                {/* {todos} */}
            </div>
        )
    }
}

export default TodoList;