/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/navcomp.css';
import logo from '../assets/logo.svg';

function Navcomp() {
  return (
    <nav>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand className="logoArea">
            <img alt="logo" src={logo} className="d-inline-block align-top" />
            <header>React Bootstrap</header>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Collapse className="links">
              <Link to="/">
                <Nav.Item>Home</Nav.Item>
              </Link>
              <Link to="/store">
                <Nav.Item>Store</Nav.Item>
              </Link>
            </Navbar.Collapse>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#">Alban Marku</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    </nav>
  );
}

export default Navcomp;
