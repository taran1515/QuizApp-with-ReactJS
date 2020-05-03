import React, { Component } from 'react'
import "./assets/style.css";
import ReactDOM from "react-dom";
import quizService from "./quizService";
import QuestionBox from './components/quetionBox';
import Result from './components/result';
// import Reservation from "./components/reservation"

class Quiz extends Component{

    state = {
        questionBank : [],
        score : 0,
        queAnswerd : 0 
    };


    getQuestion = async () => {
        const response = await quizService()
        this.setState({
            questionBank:response

        });
    }

    getCorrectAns = (correct,selected) =>{
        // console.log(correct);
        // console.log(selected);

        if (selected===correct){
            this.setState({
                score: this.state.score+1
            });
        }
        this.setState({
            queAnswerd: this.state.queAnswerd < 5 ? this.state.queAnswerd + 1 : 5
        });
    }

    playAgain = () =>{
        this.getQuestion();
        this.setState({
            score:0,
            queAnswerd:0
        })
    }

    componentDidMount(){
        this.getQuestion();
    }

    render(){
        return(
            <div className="container">
                <div className="title">Quiz bee</div>
                {this.state.questionBank.length > 0 && this.state.queAnswerd < 5 && this.state.questionBank.map(({question, answers, correct, questionId}) => 
                    <QuestionBox question={question} options={answers} key={questionId} rightAns={this.getCorrectAns} correct={correct}/>                 
                )}

                {this.state.queAnswerd === 5 ? <Result score={this.state.score} playAgain={this.playAgain}/> : null}
            </div>
        );
    }
}

ReactDOM.render(<Quiz />, document.getElementById("root"));