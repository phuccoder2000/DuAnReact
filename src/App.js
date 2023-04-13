
import './App.scss';
import Header from "./Components/Headers/Header.js";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>
        </div>
        <div className='app-content'></div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
