import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'



const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="user-content">
                <button>Add new users</button>
                <div className="">
                    table user
                </div>
                <ModalCreateUser />
            </div>

        </div>
    )
}
export default ManageUser