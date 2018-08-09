import React, { Component } from 'react';
import TodoList from "./TodoList";
import './TodoApp.css';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default TodoApp;