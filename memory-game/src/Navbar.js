import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

class Navbar extends Component {

    render() {
        const {onNewGame} = this.props;
        return (
            <header>
                <h1>Memory Game</h1>
                <nav>
                   <li><a onClick={onNewGame}>New Game</a></li> 
                </nav>
            </header>
        )
    }
    
}
Navbar.PropTypes = {
    onClick: PropTypes.func.isRequired
}

export default Navbar;