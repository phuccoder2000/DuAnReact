import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Phucdeptrai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'> Home</Link>
            <Link to="/Users" className='nav-link'> Users</Link>
            <Link to="/Admins" className='nav-link'> Admins</Link>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="admins">Admin</Nav.Link> */}

          </Nav>
          <Nav>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;