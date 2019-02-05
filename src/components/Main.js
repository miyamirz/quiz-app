import React, { Component } from 'react';
import Question from './Question';
import data from '../question.js';
import Answers from './Answers';
import ScoreBoard from './ScoreBoard';
export default class Main extends Component {
  constructor(props){
     super(props);
     this.state ={
           currentQuestionNumber:1,
           answeredCorrect:0,
           showScoreBoard:false,
           displaySubmit:true,
       
     }
  }
  nextQuestion = () => {
    let {currentQuestionNumber}=this.state;
    if(currentQuestionNumber < (data.length))
      this.setState({currentQuestionNumber:currentQuestionNumber+1})
     else
      this.setState({showScoreBoard:true,displaySubmit:false});
  }
  incrementAnsweredCorrect = () => {
    this.setState({answeredCorrect:this.state.answeredCorrect+1})
  }
  restartQuiz= () =>{
    this.setState({currentQuestionNumber:1,
      answeredCorrect:0,
      showScoreBoard:false,
      displaySubmit:true})
  }
  render() {
    const {currentQuestionNumber,answeredCorrect}=this.state;
    const currentQuestion = data[currentQuestionNumber-1].question;
    const answers = data[currentQuestionNumber-1].answers;
    const correctAnswer = data[currentQuestionNumber-1].correct;
    const answer = answers[correctAnswer-1];
    //const val=currentQuestionNumber < data.length;
   // alert(val)
    return (
    <div id='main'>
        <Question currentQuestionNumber={currentQuestionNumber} currentQuestion={currentQuestion} totalQuestions={this.props.totalQuestions} />
        <Answers answers={answers} correctAnswer = {correctAnswer} answer={answer} incrementAnsweredCorrect={this.incrementAnsweredCorrect} classNames={['','','','']}/>
        {this.state.displaySubmit?<button id='btnNext' onClick={this.nextQuestion}> {currentQuestionNumber < (data.length) ? 'Next' : 'Submit'}</button>:''}
        {this.state.showScoreBoard?<ScoreBoard restartQuiz={this.restartQuiz} answeredCorrect={answeredCorrect} totalQuestions={this.props.totalQuestions}/>:''}
      </div>
      
    )
  }
}
