// Question.js

import React, { Component } from "react";
import Options from "./Options";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit, isAnswer, isSubmit, handleNextQuestion } = this.props;
        return (
            <div className="">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                        isSubmit={isSubmit}
                        isAnswer={isAnswer}
                    />

                    <button type="submit" className="btn btn-success mt-2" disabled={isSubmit}>
                        SUBMIT
                    </button>
                </form>
                <div>
                    <button onClick={handleNextQuestion} className="btn btn-success mt-2">Next Question</button>
                </div>

            </div>
        )
    }
}

export default Question;
