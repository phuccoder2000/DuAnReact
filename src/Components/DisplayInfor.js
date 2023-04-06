import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowhide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUser } = this.props

        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowhide() }}>
                        {this.state.isShowListUser === true ? "hide list user:" : "show list user"}</span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> my name: {user.name}</div>
                                    <div> my age:{user.age}</div>
                                </div>
                            )
                        })}

                    </div>
                }
            </div>

        )
    }
}
export default DisplayInfor