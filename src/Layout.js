import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import App from './App';
// import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import HomePage from './Components/Home/HomePage';
import ManageUser from './Components/Admin/Content/ManageUser';
import DashBoard from './Components/Admin/Content/DashBoard';
import Login from './Components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import Register from "./Components/Auth/Register";
import ListQuiz from "./Components/User/ListQuiz";
import DetailQuiz from "./Components/User/DetailQuiz";

const NotFound = () =>{
    return(
        <div className=" container mt-3 alert alert-danger">404. Not found data with you current URL</div>
    )
}
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='/users' element={<ListQuiz></ListQuiz>} />
                </Route>
                <Route path='/quiz/:id' element={<DetailQuiz />} />
                <Route path='admins' element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path='manage-Users' element={<ManageUser />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
              
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