// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Phuc",
        address: "phucdeptrai",
        age: 25
    }

    handleClickme(event) {
        console.log("clickme")
        console.log("My name is", this.state.name)
    }
    handleOnmouseover(event) {
        console.log(event.pageX)
    }

    // JSX  
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
                <button onMouseOver={this.handleOnmouseover}>onMouseOver</button>
                <button onClick={this.handleClickme}>Clickme</button>
            </div>
        )
    }
}
export default MyComponent;