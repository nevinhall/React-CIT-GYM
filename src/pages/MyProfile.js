import React from 'react';
import { Image, Col, Row, Button, Container, Form, Jumbotron } from 'react-bootstrap';
import '../css/index.css';


import SignUpComponent from '../components/signUpComponent'
import MyClasses from './MyClasses';


import NavBar from '../components/NavBar'



const MyProfile = () => {

  return (

    <div >
      <NavBar />
      < MyClasses />

      <Jumbotron fluid>
        <Container>
          <h1>Edit user Profile</h1>
          <p>
            Here you can edit any elemnt of your profile.
          </p>
        </Container>
      </Jumbotron>
      <SignUpComponent />
    </div >
  );
}

export default MyProfile;