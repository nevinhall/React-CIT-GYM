import React, { useState } from 'react';
import { Image, Col, Row, Button, Container, Form, Table } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom'

import '../css/form.css';





const SignUpComponent = () => {
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target),
            newUser = Object.fromEntries(formData.entries())
        console.log(newUser)


        var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
        if (existingEntries == null) existingEntries = [];


        var updatedUsers = existingEntries.filter(item => item.fname !== newUser.fname)

        updatedUsers.push(newUser)


        console.log(existingEntries);
        localStorage.setItem("allEntries", JSON.stringify(updatedUsers));



        let path = '/login';
        history.push(path);
    }


    const onClikcHanler = () => {
        let path = '/login';
        history.push(path);
    }



    return (
        <div className="p-5">
            <Container >
                <Row >
                    <Col>
                        <Form onSubmit={handleSubmit} >
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formBasicName" className="email">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name="fname" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicLname">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" name="lname" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>




                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" name="gender" type="select">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="Enter your Age" name="age" />
                            </Form.Group>
                            <Form.Row>
                                <Col>

                                    <Form.Group controlId="formBasicHeight">
                                        <Form.Label>Height</Form.Label>
                                        <Form.Control type="number" placeholder="Enter your Height" name="height" />
                                    </Form.Group>
                                </Col>
                                <Col>

                                    <Form.Group controlId="formBasicWeight">
                                        <Form.Label>Weight</Form.Label>
                                        <Form.Control type="number" placeholder="Enter your weight" name="weight" />
                                    </Form.Group>

                                </Col>
                            </Form.Row>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" />
                            </Form.Group>

                            <Form.Row>
                                <Col>
                                    <Button variant="primary" type="submit"> Submit</Button>
                                </Col>
                                <Col>
                                    <Button onClick={onClikcHanler}> Already Have an account ?</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Container>



        </div>
    );
}

export default SignUpComponent;


















