import { useState } from 'react'
import './Admin.scss'
import SideBar from "./Sidebar"
import { FaBars } from 'react-icons/fa'


const Admin = (props) => {
    const [collapsed , setcollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed ={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() =>setcollapsed(!collapsed)}/>
            </div>
        </div>
    )
}
export default Admin