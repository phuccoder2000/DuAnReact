// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Phuc",
        address: "phucdeptrai",
        age: 25
    }
    // JSX  
    render() {
        return (
            <div>
               My name is {this.state.name} and i'm from {this.state.address}
            </div>
        )
    }
}
export default MyComponent;