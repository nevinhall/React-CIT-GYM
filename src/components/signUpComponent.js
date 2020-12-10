import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { Image, Col, Row, Button, Container, Form, Table } from 'react-bootstrap';



const SignUpComponent = () => {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target),
            newUser = Object.fromEntries(formData.entries())
        console.log(newUser)


        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if (existingEntries == null) existingEntries = [];
        var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));
        if (userLogedIn == null) userLogedIn = [];


        var updatedUser = existingEntries.filter(item => item.fname !==  newUser.fname ) 
        updatedUser.push(newUser)

        console.log(updatedUser);


        localStorage.setItem("classes", JSON.stringify(updatedUser));






        ////////////////////////////////////////
        existingEntries.push(newUser);
        console.log(existingEntries);
        localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        let path = '/currentclasses';
        history.push(path);

    }


    return (
        <div>
            <Container>
                <Row className=" ">
                    <Col className="d-flex justify-content-center">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col>
                        <Form onSubmit={handleSubmit} className="login-Form">
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="fname" />
                            </Form.Group>

                            <Form.Group controlId="formBasicLname">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" name="lname" />
                            </Form.Group>



                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" name="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter your Age" name="age" />
                            </Form.Group>

                            <Form.Group controlId="formBasicHeight">
                                <Form.Label>Height</Form.Label>
                                <Form.Control type="number" placeholder="Enter your Height" name="height" />
                            </Form.Group>

                            <Form.Group controlId="formBasicWeight">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="number" placeholder="Enter your weight" name="weight" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                Submit
</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default SignUpComponent;


















