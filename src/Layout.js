import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import App from './App';
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import HomePage from './Components/Home/HomePage';
import ManageUser from './Components/Admin/Content/ManageUser';
import DashBoard from './Components/Admin/Content/DashBoard';
import Login from './Components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<User />} />
                </Route>
                <Route path='admins' element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path='manage-Users' element={<ManageUser />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )

}
export default Layout