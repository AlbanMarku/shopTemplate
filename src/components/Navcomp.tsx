/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navcomp.css';
import logo from '../assets/logo.svg';

function Navcomp() {
  return (
    <nav>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#" className="logoArea">
            <img alt="logo" src={logo} className="d-inline-block align-top" />
            <header>React Bootstrap</header>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Navbar.Collapse>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Store</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
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
