// Option.js

import React, { Component } from 'react';

class Options extends Component {

    render() {
        const { options, selectedOption, onOptionChange, isAnswer, isSubmit } = this.props;
        return (
            <div className='options'>
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            // onChange={onOptionChange}
                            onChange={(e) => {
                                if (isSubmit) {
                                    return;
                                }
                                onOptionChange(e);
                            }}
                            className="form-check-input"

                        />
                        <label
                            className={
                                selectedOption === option ?
                                    (isAnswer === undefined ? 'form-check-label text-info'
                                        : (isAnswer ? 'form-check-label text-success'
                                            : 'form-check-label text-danger')) : 'form-check-label'
                            }
                        >{option}</label>

                    </div>
                ))}
            </div>
        );
    }
}

export default Options;
