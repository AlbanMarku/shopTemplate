/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/navcomp.css';
import logo from '../assets/logo.svg';

function Navcomp() {
  return (
    <nav>
      <Navbar expand="lg">
        <Container>
          <Link id="header" to="/">
            <Navbar.Brand className="logoArea">
              <img alt="logo" src={logo} className="d-inline-block align-top" />
              <div className="headerText">
                <header>React Bootstrap</header>
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
              <Link to="/">
                <Nav.Item>Home</Nav.Item>
              </Link>
              <Link to="/store">
                <Nav.Item>Store</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/* jitter from two .collapse */}
          <Navbar.Collapse className="justify-content-end">
            <div className="inputArea">
              <Navbar.Text>
                Signed in as: <a href="#">Alban Marku</a>
              </Navbar.Text>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Navcomp;
