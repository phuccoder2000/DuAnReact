
import React from "react";
import AddUser from "./AddUser";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'phucdeptrai', age: 16 },
            { id: 2, name: 'phucdeptrai2', age: 69 },
            { id: 3, name: 'phucdeptrai3', age: 28 }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }
    render() {
        return (
            <div>
                <AddUser handleAddNewUser={this.handleAddNewUser} />
                <br /> <br />
                <DisplayInfor listUser={this.state.listUser}
                />
                <hr></hr>
            </div>
        )
    }
}
export default MyComponent;