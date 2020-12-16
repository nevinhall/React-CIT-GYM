import React , { useState, useEffect}from 'react';
import { Image, Col, Row, Button, Container, Form, Jumbotron } from 'react-bootstrap';
import '../css/index.css';
import { useHistory } from 'react-router-dom'


import SignUpComponent from '../components/signUpComponent'
import MyClasses from './MyClasses';


import NavBar from '../components/NavBar'
import MyTrainers from '../components/MyTrainers';
const MyProfile = () => {



  const [filter, setFilter] = useState("")
  const [data, setData] = useState([])


 

  const logOut = () => {
    localStorage.setItem("userLogedIn", JSON.stringify({}));

    var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));
    console.log(userLogedIn);


    let path = '/login';
    history.push(path);
  }

  const history = useHistory();

  return (

    <div >

      <NavBar item={true} />
      <Jumbotron fluid>
        <Container>
          <h1>My Profile</h1>
          <Button onClick={logOut}>Log out</Button>

        </Container>
      </Jumbotron>

      < MyClasses />
      < MyTrainers />

      <Jumbotron fluid>
        <Container>
          <h1>Edit user Info</h1>
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