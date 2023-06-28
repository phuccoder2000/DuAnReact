<<<<<<< HEAD
import './App.scss';
import Header from "./Components/Headers/Header.js";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'
=======

import './App.scss';
import Header from "./Components/Headers/Header.js";
>>>>>>> master

const App = () => {
  return (
    <div className="app-container">
<<<<<<< HEAD
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>
        </div>
        <div className='app-content'>
        </div>
        <PerfectScrollbar>
          <Outlet />
        </PerfectScrollbar>
      </div>
    </div>
  );
}
=======
      <Header />
      <div>
        test link
        <div></div>
      </div>
    </div>
  );
}

>>>>>>> master
export default App;
