import React from "react";
import "./DisplayInfo.scss"
import logo from "./../logo.svg"
const DisplayInfor = (props) => {
    const { listUser } = props
    return (
        <div className="display-infor-container">
            {true &&
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