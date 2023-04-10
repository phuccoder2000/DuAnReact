import React from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"
class DisplayInfor extends React.Component {

    constructor(props) {
        console.log("call constructor : 1")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    handleShowhide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    componentDidMount() {
        console.log("call me did Mout   ")
        setTimeout(() => {
            document.title ="phucdeptrai"
        }, 3000);
    }
    componentDidUpdate(prevProps,prevState){

        console.log("call me componentDidUpdate",this.props,prevProps)
        if(this.props.listUser !== prevProps.listUser){
            if(this.props.listUser.length === 5){
                alert("you got 5 user")
            }
        }
    }
    render() {
        console.log("call me render:")
        const { listUser } = this.props
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowhide() }}>
                        {this.state.isShowListUser === true ? "hide list user:" : "show list user"}</span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> my name: {user.name}</div>
                                    <div> my age:{user.age}</div>
                                    <div>
                                        <button onClick={() => this.props.handelDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>

                            )
                        })}

                    </>
                }
            </div>
        )
    }
}
export default DisplayInfor