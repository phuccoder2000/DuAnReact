import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/apiService';
import { toast } from 'react-toastify';
import { doLogout } from '../../redux/action/UserAction';
import Language from './Language';
const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }
  const handleRegister = () => {
    navigate("/register")
  }

  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const account = useSelector(state => state.user.account)
  const dispatch = useDispatch();
  // console.log(">>> check account:", account)

  const handelLogOut = async () => {
    let res = await logout(account.email, account.refresh_token)
    if (res && res.EC === 0) {
      //clear data redux
      dispatch(doLogout());
      navigate('/login')
    } else {
      toast.error(res.EM)
    }
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Phucdeptrai</Navbar.Brand> */}
        <NavLink to="/" className='navbar-brand'> Phuccoder</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'> Home</NavLink>
            <NavLink to="/users" className='nav-link'> Users</NavLink>
            <NavLink to="/admins" className='nav-link'> Admins</NavLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="admins">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            {isAuthenticated === false ?
              <>
                <button className='btn-login' onClick={() => handleLogin()}>Login</button>
                <button className='btn-signup' onClick={() => handleRegister()}>Sign up</button>
              </>
              :
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item >Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handelLogOut()}>Log out</NavDropdown.Item>
              </NavDropdown>}

              <Language />
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;