import React from 'react';
import Logo from './resources/LW1.svg';
import './Header.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    return (
        <div className="header">
            <Navbar className="navbar-dark" bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={Logo}
                            width="48"
                            height="48"
                            className="d-inline-block align-center"
                            alt="Cyber Cup Logo"
                        />
                        {' '}
                        Cyber Cup 2022
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#event">Events</Nav.Link>
                            {/* <Nav.Link href="#hackathon">Hackathons</Nav.Link> */}
                            <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;