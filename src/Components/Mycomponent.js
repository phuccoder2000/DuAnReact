// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Phuc",
        address: "phucdeptrai",
        age: 25
    }

    // handleClickme = (event) => {
    //     console.log("clickme")

    //     this.setState({
    //         name: 'phuc01',
    //         age: Math.floor(Math.random() * 100) + 1

    //     })
    // }

    handleOnchane = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }
    handleOnsubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm  {this.state.age}
                <form onSubmit={(event) => this.handleOnsubmit(event)} >
                    <input type="text" onChange={(event) => this.handleOnchane(event)}></input>
                    <button >summit</button>
                </form>
            </div>
        )
    }
}
export default MyComponent;