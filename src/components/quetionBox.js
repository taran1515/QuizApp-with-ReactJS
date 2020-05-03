import React from 'react';

class QuestionBox extends React.Component{

    state = {
        answer:this.props.options,
        correct:this.props.correct
    }

    onClickChange = (e) => {
        // console.log(e)
        // alert(this.state.answer)
        var newstate = e.target.innerText.split()
        // alert(this.props.correct)
        // alert(newstate[0])
        this.setState({
            answer: newstate,            
        });
        // alert(this.state.answer)
        this.props.rightAns(this.state.correct,newstate[0])

        // alert(this.state.correct)
        
        

    }




    render(){
        // console.log(this.props.question)
        return(
        <div className="questionBox">
            <div className="question">
                {this.props.question}
                <br></br>
                {this.state.answer.map((text,index) => (
                    <button key={index} className="answerBtn" onClick={this.onClickChange} >
                        {text}       
                    </button>
                   
                ))}
            </div>
        </div>

        );
    }
}

export default QuestionBox;