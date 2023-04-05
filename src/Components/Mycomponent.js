// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Phuc",
        address: "phucdeptrai",
        age: 25
    }

    handleClickme = (event) => {
        console.log("clickme")
    
        this.setState({
            name: 'phuc01',
            age: Math.floor(Math.random() * 100) + 1

        })
    }
    handleOnmouseover = (event) => {
        // console.log(event.pageX)
    }

    // JSX  
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm  {this.state.age}
                <button onMouseOver={this.handleOnmouseover}>onMouseOver</button>
                <button onClick={this.handleClickme}>Clickme</button>
            </div>
        )
    }
}
export default MyComponent;