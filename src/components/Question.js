import React, { Component } from 'react';

function Question({ currentQuestionNumber,currentQuestion, totalQuestions }) {
	return (
    <div className="questionHead question">
			<span className="questionHead">
				Question {currentQuestionNumber} of {totalQuestions}
			</span>  
       <strong>{currentQuestion}</strong>
      </div>
	);
}

export default Question;
