
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/apiService"
import ModalUpdateUser from "./ModalApdateUser"
import ModalCreateUser from "./ModalCreateUser"
import ModalViewUser from './ModalViewUser'
import ModalDeleteUser from './ModalDeleteUser'

const ManageUser = (props) => {
    const [showModalCreateUser, setshowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
    const [showModalViewUser, setshowModalViewUser] = useState(false)
    const [showModalDeleteUser, setshowModalDeleteUser] = useState(false)

    const [dataUpdate, setDataUpdate] = useState({})
    const [listUser, setListUser] = useState([])
    
    const [dataDelete, setDataDelete] = useState({})

    useEffect(() => {
        fetchListUsers()
    }, [])
    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }
    const handleClickBtnUpdate = (user) => {
        setshowModalUpdateUser(true);
        setDataUpdate(user)


    }
    const handleClickBtnView = (user) => {
        setshowModalViewUser(true);
        setDataUpdate(user)


    }
    const handleClickBtnDelete = (user) => {
        setshowModalDeleteUser(true);
        setDataDelete(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
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
                    <TableUser listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}

                    />

                </div>
                <ModalCreateUser show={showModalCreateUser}
                    setShow={setshowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser show={showModalUpdateUser}
                    setShow={setshowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser show={showModalViewUser}
                    setShow={setshowModalViewUser}
                    dataUpdate={dataUpdate}
                    resetUpdateData={resetUpdateData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setshowModalDeleteUser}
                    dataDelete ={dataDelete} />
            </div>
        </div>
    )
}
export default ManageUser