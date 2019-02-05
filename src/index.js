import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './styles/styles.css';
import Header from "./components/Header";
import Main from "./components/Main";
import data from './question.js';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      totalQuestions :data.length
    }
  }
  render() {
    return (
      <div className="container">
        <Header /> 
        <Main totalQuestions={this.state.totalQuestions} />
      </div>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
