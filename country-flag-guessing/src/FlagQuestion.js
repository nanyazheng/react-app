import React, {Component} from "react";
import FlagChoice from "./FlagChoice";
import FlagAnswer from "./FlagAnswer";
import "./FlagQuestion.css";

class FlagQuestion extends Component {
    static defaultProp = {
        options: []
    }
    constructor(props) {
        super(props);
        this.state = {
            userChoice: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onGuess(this.state.userChoice);
    }
    handleChange(e) {
        this.setState({userChoice: Number(e.target.value)});
    }
    render() {
        const {
            options,
            flag,
            questionState,
            answer,
            onNext
        } = this.props;
        const output = questionState === 1 ?  
        <FlagChoice 
        options={options}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        /> : 
        <FlagAnswer
        correct={questionState === 3} 
        answer={answer}
        onNext={onNext}
        />
        return (
            <div className="flag-question">
                {output}
                <img src={flag} alt="flag-name" className="flag-img"/>
            </div>
        )
        
    }
}

export default FlagQuestion;