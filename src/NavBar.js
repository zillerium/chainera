import { LinkContainer } from 'react-router-bootstrap';
import flowswap from './chainera2.png';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ArrowRight, WalletFill, Wallet2 } from 'react-bootstrap-icons';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect bg="#000000" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={flowswap} className="img-fluid" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/web3">
              <Nav.Link>Web3</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/smartcontracts">
              <Nav.Link>Flowswap</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/catalox">
              <Nav.Link>Catalox</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/peacio">
              <Nav.Link>Peacio</Nav.Link>
            </LinkContainer>
	     </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

