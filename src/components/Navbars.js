import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, NavItem, Nav } from 'react-bootstrap/Navbar';
import './Navbars.css';

class Navbars extends Component {

    render() {
        return (
            <div className="navbars">
                <Navbar fluid fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="navbars" href="/">The Short Stop</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="navbars">
                            <NavItem eventKey={2} href="#about"
                            > About &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>
                            <NavItem eventKey={3} href="#northamerica"
                            > North America &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                            <NavItem eventKey={4} href="#southamerica" target="_blank"
                            > South America &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                             <NavItem eventKey={5} href="#asia" target="_blank"
                            > Asia &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                             <NavItem eventKey={6} href="#africa" target="_blank"
                            > Africa &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                            <NavItem eventKey={7} href="#europe"
                            > Europe &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                <NavItem eventKey={8} href="#caribbean" target="_blank"
                            > Caribbean &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                <NavItem eventKey={9} href="#middleeast" target="_blank"
                            > Middle East 
                </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default Navbars;
