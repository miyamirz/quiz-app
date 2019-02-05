import React, { Component } from 'react'

export default class ScoreBoard extends Component {
  render() {
    return (
      <div id='scoreboard'>
      YOUR HAVE SCORED {this.props.answeredCorrect}/{this.props.totalQuestions}
      <button onClick={()=>{this.props.restartQuiz()}} id='btnRestart'>Restart</button>
      </div>
    )
  }
}
