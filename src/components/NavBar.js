import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../css/navBar.css'


const Navigation = () => {
    return (
        <Nav  className="justify-content-end bar"
        >
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
            </Nav.Item>
            
        </Nav>


    );
}

export default Navigation;













