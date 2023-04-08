
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
    handelDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserClone

        })
    }
    render() {
        return (
            <>
                <div className="a">
                    <AddUser handleAddNewUser={this.handleAddNewUser} />
                    <br /> <br />
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handelDeleteUser={this.handelDeleteUser}
                    />
                    <hr></hr>
                </div>
                <div className="b">
                </div>
            </>
        )
    }
}
export default MyComponent;