import { useState } from 'react'
import './Admin.scss'
import SideBar from "./Sidebar"
import { FaBars } from 'react-icons/fa'
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'


import 'react-toastify/dist/ReactToastify.css';
import Language from '../Headers/Language';
import { NavDropdown } from 'react-bootstrap';

const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className='admin-header'>
                    <span onClick={() => setcollapsed(!collapsed)} >
                        <FaBars className='leftside' />
                    </span>
                    <div className='rightside'>
                        <Language />
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
                <div className='admin-main'>
                    <PerfectScrollbar>
                        <Outlet />
                    </PerfectScrollbar>
                </div>


            </div>
        </div>
    )
}
export default Admin