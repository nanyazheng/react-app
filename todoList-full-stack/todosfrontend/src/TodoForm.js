import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.name]: [e.target.value]});
    }
    handleSubmit(e) {
        e.preventDefault();
        const {newTodo} = this.props;
        console.log(newTodo);
        newTodo(this.state.inputText);
    }
    render() {
        const {inputText} = this.state;
        return (
            <div>
                <form 
                action="POST"
                onSubmit={this.handleSubmit} 
                >
                <input 
                type="text"
                name="inputText"
                value={inputText}
                onChange={this.handleChange}
                />
                <button type="submit" className="save-button">
                SAVE
                </button>
                </form>
                
            </div>
        )
    }
}

export default TodoForm;