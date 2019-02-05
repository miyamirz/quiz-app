
import React, { Component } from 'react'

export default class Answers extends Component {

  constructor(props){
      super(props);
      this.state={
          classNames:['','','','']
      }
      this.handleCheck = this.handleCheck.bind(this);
  }
 componentWillReceiveProps(nextProps){
      if(nextProps.answers !== this.props.answers){
         this.setState({classNames:['','','','']})
      }     
    
}
 
 handleCheck(e) {
   let {correctAnswer,incrementAnsweredCorrect,answer} = this.props; 
   const selected = parseInt(e.currentTarget.dataset.id);
   console.log('correct answer is:  '+answer);
   let classNames = []
   if(correctAnswer === selected){
    console.log("You have selected correct answer");
    incrementAnsweredCorrect();
   }
   else if(correctAnswer !== selected)
   {
    console.log("You have selected wrong answer");
   }
       classNames = this.state.classNames.map((val,index) => {
           if((index+1) === selected)
             return 'correct'
           else
             return 'wrong'
       })
       this.setState({classNames})
  }
  render() {
      const {classNames} = this.state;
    return (
        <div id="answers">
            <ul>
                <li className={classNames[0]} onClick={this.handleCheck}  data-id="1"><span>A</span> <p>{this.props.answers[0]}</p></li>
                <li className={classNames[1]} onClick={this.handleCheck} data-id="2"><span>B</span> <p>{this.props.answers[1]}</p></li>
                <li className={classNames[2]} onClick={this.handleCheck} data-id="3"><span>C</span> <p>{this.props.answers[2]}</p></li>
                <li className={classNames[3]} onClick={this.handleCheck} data-id="4"><span>D</span> <p>{this.props.answers[3]}</p></li>
            </ul>
        </div>
    )
  }
}
