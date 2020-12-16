import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../css/navBar.css'


const Navigation = (props) => {
    const [showlinks, setShowlinks] = useState(true)

    useEffect(() => {
        setShowlinks(props.item)
        console.log("f", showlinks);
    }, [])


    const navlinks = () => {
        return (
            <div>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/currentclasses">Classes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/myprofile">My Profile</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/currenttrainers">Book Appointment</Nav.Link>
                </Nav.Item>

            </div>
        )
    }

    return (
        <Nav className=" bar " >

            {showlinks ?
                <div className="navbar navbar-light justify-content-end bar w-100">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/currentclasses">Classes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/myprofile">My Profile</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/currenttrainers">Book Appointment</Nav.Link>
                    </Nav.Item>

                </div>



             : null}

        </Nav>


    );
}

export default Navigation;













