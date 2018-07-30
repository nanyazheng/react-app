import React from "react";
import "./FlagAnswer.css";

const FlagAnswer = props => {
    const {correct, answer, onNext} = props;
    let outputs = correct === true ? 
        `Correct Answer!`: 
        `Wrong Answer! The Correct Country is ${answer}`
    return (
        <div className="flag-answer">
            {outputs}
            <button type="button" className="button" onClick={onNext}> Next Guessing</button>
        </div>
    )
}

export default FlagAnswer;