import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"

import { getAllUsers } from "../../services/apiService"
const ManageUser = (props) => {
    const [showModalCreateUser, setshowModalCreateUser] = useState(false)
    const [listUser, setListUser] = useState([])
    useEffect(() => {
        fetchListUsers()
    }, [])
    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setshowModalCreateUser(true)}>
                        <FcPlus />
                        Add new users

                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUser={listUser} />
                </div>
                <ModalCreateUser show={showModalCreateUser}
                    setShow={setshowModalCreateUser} 
                    fetchListUsers ={fetchListUsers}/>
            </div>
        </div>
    )
}
export default ManageUser