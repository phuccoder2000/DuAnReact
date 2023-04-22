import React from 'react'; import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import User from './Components/User/User';
import Admin from './Components/Admin/Admin';
import HomePage from './Components/Home/HomePage';
import ManageUser from './Components/Admin/Content/ManageUser';
import DashBoard from './Components/Admin/Content/DashBoard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/users' element={<User />} />
        </Route>
        <Route path='admins' element={<Admin />}>
        <Route index element={<DashBoard />} />
        <Route path='manage-Users'element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
