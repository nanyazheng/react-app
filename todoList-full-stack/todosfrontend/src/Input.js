import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    handleSumbit(e) {
        e.preventDefault();
        
    }
    handleChange(e) {
        this.setState({[e.target.name]: [e.target.value]});
    }
    render() {
        return (
            <div>
                <form action="post" onSubmit={this.handleSumbit} >
                    <input 
                    type="text" 
                    name="inputText" 
                    value={this.state.inputText}
                    onChange={this.handleChange()}
                    />
                </form>
                <button
                type="submit"
                className="save-button"
                >
                    SAVE
                </button>
            </div>
        )
    }
}

export default Input;
