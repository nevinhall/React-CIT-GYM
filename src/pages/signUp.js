import React, { useState } from 'react';
import { Image, Col, Row, Button, Container, Form, Table } from 'react-bootstrap';
import { useSelector, useDispatch, connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { signUp } from '../actions'
import '../css/index.css';

import SignComponent from '../components/signUpComponent'
import NavBar from '../components/NavBar'


const SignUp = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: " ",
        username: "",
        email: "",
        gender: "",
        Age: 18,
        height: 183,
        weight: 45,
        pasword: " "
    })

    const [Completed, setCompleted] = useState(false)

    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        setCompleted(true)
        const user1 = user
        console.log("t");
        console.log(user1);

        dispatch(signUp(user1))
    }


    return (

        <div>
            <NavBar />
            <div className="d-flex justify-content-start">
                <SignComponent />
            </div>
        </div>
    );


}

const mapStateToProps = (state) => {
    return {
        profile: state.user.profile
    }
}

export default connect(mapStateToProps)(withRouter(SignUp));