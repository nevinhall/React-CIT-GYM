import React from 'react';
import { Image, Col, Row, Button, Container, Form, Nav } from 'react-bootstrap';
import '../css/index.css';


import LoginComponent from '../components/LoginComponent'


import NavBar from '../components/NavBar'



const Login = () => {

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center p-5">
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;