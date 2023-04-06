import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props
        // console.log(listUser)
        return (
            <div>
                {listUser.map((user, index) =>{
                    return(
                        <div key={user.id}>
                            <div >My name: {user.name}</div>
                            <div>My age: {user.age}</div>
                        </div>

                    )
                })}
                {/* <div>My name: {name}</div>
                <div>My age: {age}</div>
                <hr/>
                <div>My name: {name}</div>
                <div>My age: {age}</div>
                <hr/>
                <div>My name: {name}</div>
                <div>My age: {age}</div> */}
            </div>
        )
    }
}
export default DisplayInfor