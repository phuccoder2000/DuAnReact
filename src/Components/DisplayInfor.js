import React from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"
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
            <div className="display-infor-container">
                <img src={logo} />
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