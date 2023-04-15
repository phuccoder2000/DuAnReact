import ModalCreateUser from "./ModalCreateUser"



const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="user-content">
                <button>Add new users</button>
            </div>
            <div className="">
                table user
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser