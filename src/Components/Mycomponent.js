
import React from "react";
import Userinfo from "./Userinfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'phucdeptrai', age: 30 },
            { id: 2, name: 'phucdeptrai2', age: 29 },
            { id: 3, name: 'phucdeptrai3', age: 28 }
        ]
    }
    render() {
        return (
            <div>
                <Userinfo />
                <br /> <br />
                <DisplayInfor listUser={this.state.listUser} />
                <hr></hr>
            </div>
        )
    }
}
export default MyComponent;