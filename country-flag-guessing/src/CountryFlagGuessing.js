import React, { Component } from 'react';
import './CountryFlagGuessing.css';
import FlagQuestion from './FlagQuestion';
import shuffle from 'shuffle-array';
import imgWorld from "./world.jpg";

const QuestionState = {
  Question: 1,
  WrongAnswer: 2,
  CorrectAnswer: 3
}

class CountryFlagGuessing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      questionState: undefined
    }
    this.onGuess = this.onGuess.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => {
        const correctOption = Math.floor(Math.random() * countries.length);
        const options = this.getOptions(correctOption, countries);
        this.setState({
          countries,
          options,
          correctOption,
          questionState: QuestionState.Question
        })
      })
  }

  onGuess(answer) {
    const {correctOption} = this.state;
    let questionState = correctOption === answer ? 
                        QuestionState.CorrectAnswer : QuestionState.WrongAnswer;
    this.setState({questionState});
    console.log(this.state.questionState);
  }

  onNext() {
    const {countries} = this.state;
    const correctOption = Math.floor(Math.random() * countries.length);
    const options = this.getOptions(correctOption, countries);
    this.setState({
      options,
      correctOption,
      questionState: QuestionState.Question
    })
  }

  getOptions(correctOption, countries) {
    let options = [correctOption];
    while (options.length < 4) {
      let option = Math.floor(Math.random() * countries.length);
      if (options.indexOf(option) === -1) {
        options.push(option);
      }
    }
    return shuffle(options);
  }

  render() {
    let {options, countries, correctOption, questionState} = this.state;
    let output = <div>Loading</div>
    if (correctOption !== undefined) {
      const {flag} = countries[correctOption];
      const {name} = countries[correctOption];
      let opts = options.map(option => {
        return {
          id: option,
          name: countries[option].name
        }
      })
      output = (
        <FlagQuestion
        options={opts}
        flag={flag}
        answer={name}
        questionState={questionState}
        onGuess={this.onGuess}
        onNext={this.onNext}
        />
      )
    }
    return (
      <div className="flag-game">
        <header className="title-header" style={
          {backgroundImage: `url(${imgWorld})`}
        }>
           <h1 className="title-text">Guess The Flag</h1>
        </header>
        {output}
      </div>
    );
  }
}

export default CountryFlagGuessing;
