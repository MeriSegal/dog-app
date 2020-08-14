import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'

class NavBar extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {
                
        return (            
            <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className="mr-auto brand" href="#/">Dog Book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#/dogs">Breeds</Nav.Link>   
                            <Nav.Link href="">About</Nav.Link>                     
                        </Nav>                        
                    </Navbar.Collapse>
                </Navbar>                    
            </div>
        );
    }
}

export default NavBar;