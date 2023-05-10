import { useState } from 'react'
import './Admin.scss'
import SideBar from "./Sidebar"
import { FaBars } from 'react-icons/fa'
import { Outlet } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className='admin-header'></div>
                <FaBars onClick={() => setcollapsed(!collapsed)} />
                <div className='admin-main'>
                    <Outlet />
                </div>
            </div>
            {/* Same as */}
            {/* <ToastContainer /> */}
        </div>
    )
}
export default Admin