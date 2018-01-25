import React, {Component} from 'react';
class Palindrome extends Component {
    constructor () {
        super()

        this.state = {
            userInput: "",
            palindrome: ""
        }

    }

    handleUserInput(val){
        this.setState({userInput: val});
    }

    returnResult(userInput){
        var forwards = userInput;
        var backwards = userInput;

        backwards=backwards.split("");
        backwards= backwards.reverse();
        backwards=backwards.join("");

     //   this.state.palindrome===userInput;
        if (forwards===backwards) {
        this.setState({palindrome: 'true'})
        ;} else {
            this.setState({palindrome: 'false'});
        }
    }



    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine"
                    onChange = {(e)=>this.handleUserInput(e.target.value)}
                    ></input>
                <button className="confirmationButton"
                    onClick = {()=>this.returnResult(this.state.userInput)}
                >Check</button>
                <span className="resultsBox">Palindome: {this.state.palindrome}</span>
            </div>
        )
    }
 }
 export default Palindrome;