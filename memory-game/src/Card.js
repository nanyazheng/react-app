import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Card.css";

class Card extends Component {
    static propTypes = {
        card: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    }
    static defaultProps = {
        onClick() {}
    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onClick();
    }
    render() {
        const {card} = this.props;
        const style = card.cardState === 0 ? {
            backgroundColor: "gray"
        } : {
            backgroundColor: card.backgroundColor
        }
        return (
            <div className="card" style={style} onClick={this.handleClick}>
            </div>
        )
    }
}

export default Card;