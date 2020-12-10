import React from 'react';
import { Image, Col, Row, Button, Container, Form, Jumbotron  } from 'react-bootstrap';


import SignUpComponent from '../components/signUpComponent'



const MyProfile = () => {
  
  return (
    <div>
        <Jumbotron fluid>
        <Container>
          <h1>Edit user Profile</h1>
          <p>
            Here you can edit any elemnt of your profile.
          </p>
        </Container>
      </Jumbotron>
        <SignUpComponent />
    </div>
  );
}

export default MyProfile;