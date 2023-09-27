import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      isAnswer: undefined,
      isSubmit: false,
      score: 0,
      quizEnd: false,
    };
  }



  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  checkAnswer = (e) => {
    e.preventDefault();
    const { questionBank, currentQuestion, selectedOption } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
      this.setState(() => ({
        isAnswer: true,
      }));
    } else {
      this.setState(() => ({
        isAnswer: false,
      }));
    }
    this.setState(() => ({
      isSubmit: true
    }))
  };



  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    this.setState(() => ({
      isSubmit: false,
    }));
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd, isAnswer, isSubmit } =
      this.state;
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center">
        <h1 className="app-title">Impossible quiz</h1>
        {!quizEnd ? (

          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.checkAnswer}
            handleNextQuestion={this.handleNextQuestion}
            isAnswer={isAnswer}
            isSubmit={isSubmit}
            score={score}

          />

        ) : (
          <Score
            score={score}
            onNextQuestion={this.handleNextQuestion}
            className="score"
          />
        )}
      </div>
    );
  }
}

export default App;