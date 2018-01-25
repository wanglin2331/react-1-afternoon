import React, {Component} from 'react';
class FilterString extends Component {
    constructor (){
        super();

        this.state= {
            unFilteredArray: ["Lin","Luke","Jake","Chris","Mark","Zack","Katie","Shane"],
            userInput: "",
            filteredArray: []
        };
    }

    handleUserInput(val){
        this.setState({userInput: val})
    }

    updateFilteredArray(userInput){
        var filteredArray=[];
        for (var i=0;i<this.state.unFilteredArray.length;i++){
            if (this.state.unFilteredArray[i].includes(userInput)){
                filteredArray.push(this.state.unFilteredArray[i]);
                }
            }
        
        this.setState({filteredArray: filteredArray})
    }

    render() {
        return (
            <div className = "puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine"
                    onChange = { 
                        (e) => this.handleUserInput(e.target.value)
                            }>
                            </input>
                <button className="confirmationButton"
                    onClick = {
                        () => this.updateFilteredArray(this.state.userInput)
                    }
                >FIlter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
 }
 export default FilterString;