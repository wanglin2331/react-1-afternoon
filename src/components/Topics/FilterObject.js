import React, {Component} from 'react';
class FilterObject extends Component {
    constructor () {
        super()

        this.state= {
            unFilteredArray : [{
                    name: "Lin",
                    age: 34,
                    role: "student"
                },
                {
                    name: "Luke",
                    age: 28,
                    role: "instructor"
                },
                {   
                    name: "Zack",
                    role:"Mentor"
                }
            ],
            userInput : "",
            filteredArray : []
        }
    }

    handleUserInput(val){
        this.setState({
            userInput: val
        })
    }


    updateFilteredArray(userInput){
        var filteredArray = [];

        for (var i=0; i<this.state.unFilteredArray.length; i++)
        {
            if (this.state.unFilteredArray[i].hasOwnProperty(userInput))
            { filteredArray.push(this.state.unFilteredArray[i])}
        }

        this.setState({filteredArray: filteredArray})
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray)} </span>
                <input className="inputLine" 
                    onChange = {
                        (e) => this.handleUserInput(e.target.value)
                        }>
                </input>
                <button className="confirmationButton"
                    onClick = {
                        () => this.updateFilteredArray(this.state.userInput)
                    }
                    >Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
 }
 export default FilterObject;