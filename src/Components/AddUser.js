import React from "react";
import { v4 as uuidv4 } from 'uuid';
class AddUser extends React.Component {
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
        const id = uuidv4(); /// thư viện  UUID
        this.props.handleAddNewUser({
            id:id,
            // id: Math.floor(Math.random()*100 + 1)+ '-ramdom',
            name: this.state.name,
            age: this.state.age

        })
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
export default AddUser