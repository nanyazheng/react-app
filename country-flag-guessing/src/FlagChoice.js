import React from "react";
import "./FlagChoice.css";

const FlagChoice = props => {
    let options = props.options || [];
    const {handleSubmit, handleChange} = props;
    let inputs = options.map(opt => (
        <label key={opt.id}>
            <input 
            type="radio"
            value={opt.id}
            name="flag-choice"
            onChange={handleChange}
            />
            {opt.name}
        </label>
    ))
    return (
        <form onSubmit={handleSubmit} className="form">
            {inputs}
            <button type="submibt" className="button">GUESS</button>
        </form>     
    )
}

export default FlagChoice;