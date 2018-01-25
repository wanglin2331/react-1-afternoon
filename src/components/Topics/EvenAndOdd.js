import React, {Component} from 'react';
class EvenAndOdd extends Component {
    
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleUserInput(val){
        this.setState (
            {
                userInput: val
            });
    }

    splitEvenOdd(userInput){
        var arr = userInput.split(',');
        var even = [];
        var odd = [];

        for (var i=0; i<arr.length; i++){
            if (arr[i]%2===0){even.push(arr[i])}
            else {odd.push(arr[i])}
        }
        this.setState({evenArray: even, oddArray: odd});

    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"
                    onChange = {(event)=>this.handleUserInput(event.target.value)}></input>
                <button className="confirmationButton"
                    onClick = {()=>this.splitEvenOdd(this.state.userInput)}
                   >Split</button>
                        <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                        <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
 }
 export default EvenAndOdd;