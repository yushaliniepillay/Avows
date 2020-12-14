import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavBarSmall from './NavBarSmall';

class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            navbars: [],
            navbaritems: []
        }
    }

    componentWillMount() {
        fetch(`http://localhost:1337/navbars`).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((navbars) => {
            this.setState({ navbars: navbars });
        })

        fetch(`http://localhost:1337/navbar-items`).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((navbaritems) => {
            this.setState({ navbaritems: navbaritems });
        })


    }


    render() {
        return (
            // <div>
            //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            //         <a className="navbar-brand" href="">{title}</a>
            //     </nav>
            // </div>
            <div>
                <NavBarSmall />
                <Navbar className="nav" bg="light" variant="light" sticky="top">
                    <Nav className="mr-auto">
                        {
                            this.state.navbars.map(({ id, title, navbaritems }) => (
                                // <div>
                                //     <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                                //         <a key={id} className="navbar-brand" href="">{title}</a>
                                //     </nav>
                                // </div>

                                <Nav.Link href="#home">{title}</Nav.Link>
                            ))
                        }
                        <NavDropdown id="basic-nav-dropdown">
                            {
                                this.state.navbaritems.map(({ id, item }) => (
                                    <NavDropdown.Item href="#action">{item}</NavDropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar>

                {/* <Navbar className="nav" bg="light" variant="light" sticky="top">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">{title} </Nav.Link>
                        <Nav.Link href="#about">ABOUT US </Nav.Link>
                        <NavDropdown title="SERVICE & SOLUTION" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">TECHNOLOGY SERVICE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">TESTING SERVICE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">CLOUD TECHNOLOGIES</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">CYBER SECURITY</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">DATA ANALYTICS AND AI</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#blog">BLOG </Nav.Link>
                        <Nav.Link href="#events">EVENTS </Nav.Link>
                        <Nav.Link href="#career">CAREER </Nav.Link>
                        <Nav.Link href="#contactUs">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar> */}


            </div >
        )
    }

}

export default NavBar;