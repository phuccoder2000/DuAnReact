import React from "react";
class Userinfo extends React.Component {
    state = {
        name: "Phuc01",
        address: "phucdeptrai",
        age: 25
    }

    handleOnchane = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }
    handleOnchaneAge = (event) => {
        this.setState(
            {
                age: event.target.value
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
                My name is {this.state.name} and i'm age  {this.state.age}
                <form onSubmit={(event) => this.handleOnsubmit(event)} >
                    <label>your Name :</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnchane(event)}></input>
                    <label>your Age :</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchaneAge(event)}></input>
                    <button >summit</button>
                </form>
            </div>
        )
    }
}
export default Userinfo