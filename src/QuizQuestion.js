import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

  constructor(props) {
    super(props)
    this.state = {incorrectAnswer: false}
  }

  render() {
    const answers = this.props.quiz_question.answer_options.map((answer_option, index) =>
      <QuizQuestionButton key={index} button_text ={answer_option} clickHandler={this.handleClick.bind(this)} />
    );

    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {answers}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className="error">Wrong!</p> : null}
      </main>
    );
  }

  handleClick(button_text) {
    if(button_text === this.props.quiz_question.answer){
      this.setState({incorrectAnswer: false})
      this.props.showNextQuestionHandler()
    } else {
      this.setState({incorrectAnswer: true})
    }
  }
}

export default QuizQuestion