import React, { Component } from 'react';
import './App.css';
const TodoItem = ({ text }) => (
  <li>{text}</li> // 3
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '' //state是用来渲染的，是会发生变化的 1
    };
    this.handleSubmit = this.handleSubmit.bind(this); //8
  }
  handleSubmit(e) { // 7
    e.preventDefault()
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: "" });
  }
  render() {
    const { newTodo } = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    )) //2 
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}> {//6
        }
          <input //4
            type="text"
            name="newTodo" newTodo is variable
            value={newTodo}
            onChange={(e) => {
              this.setState({ [e.target.name]: e.target.value })
            }}
          />
          <button //5
            type="submit"
            className="save-button"
          >
            SAVE
</button>
        </form>
        <div>
          {todos}
        </div>
      </div>
    );
  }
}
export default App;
