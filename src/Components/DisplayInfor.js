import React from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"
import { useState } from "react";
const DisplayInfor = (props) => {
    const { listUser } = props;
    const [isShowHidelistUser, SetShowHideListUser] = useState(true)
    // this.state ={
    //     isShowHidelistUser = true
    // }
    const handleShowHideListUser = () => {
        SetShowHideListUser(!isShowHidelistUser);
    }
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                {isShowHidelistUser ===true ?"Hide list user":"show list user"}
                </span>
            </div>
            {isShowHidelistUser &&
                <>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div> my name: {user.name}</div>
                                <div> my age:{user.age}</div>
                                <div>
                                    <button onClick={() => props.handelDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}

                </>
            }
        </div>
    )
}
// class DisplayInfor extends React.Component {
//     render() {
//         console.log("call me render:")
//         const { listUser } = this.props
//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo} /> */}

//                 {true &&
//                     <>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div> my name: {user.name}</div>
//                                     <div> my age:{user.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handelDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>

//                             )
//                         })}

//                     </>
//                 }
//             </div>
//         )
//     }
// }
export default DisplayInfor