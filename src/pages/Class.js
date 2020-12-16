import React from 'react';
import { useHistory } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import { Card, Button, Row, Container } from 'react-bootstrap';

import NavBar from '../components/NavBar'



const Class = (props) => {
    const history = useHistory();

    const bookVist = (props) => {
        var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));


        var currentClasses = JSON.parse(localStorage.getItem("classes"));
        console.log(userLogedIn);


        var bookClass = currentClasses.find(x => x.clubName == props)
        bookClass.members.push(userLogedIn.fname)

        var updatedClasses = currentClasses.filter(item => item !== bookClass)
        updatedClasses.push(bookClass)

        console.log(updatedClasses);


        localStorage.setItem("classes", JSON.stringify(updatedClasses));
        localStorage.setItem("classes", JSON.stringify(currentClasses));

        let path = '/myprofile';
        history.push(path, props);


    }


    return (
        <div className="App" >
            <NavBar item={true} />
            {console.log(props.history)}



            <div className="d-flex justify-content-center p-5">
                <div className="d-flex justify-content-center w-50 p-5">
                    <Container>
                        <Row>
                            <h1 className="font-weight-bold">{props.location.state.item.clubName} </h1>
                        </Row>
                        <Row>
                            <p >The {props.location.state.item.clubName} is a {props.location.state.item.typeOfActivity} type of activity. The trainer of the class is {props.location.state.item.trainer} the location of the class is {props.location.state.item.location}
                 the maximum capacity of the class is {props.location.state.item.maxSize} on average {props.location.state.item.numCalories} calories burned during this class
                  the duration of the class is {props.location.state.item.operatingDate} the duration of the class is
                 {props.location.state.durationOfClass}.
                 </p>
                        </Row>
                        <Row>
                            <Button onClick={() => bookVist(props.location.state.item.clubName)}>Book Vist</Button>
                        </Row>
                    </Container>
                </div>


            </div>
        </div>
    );
}
export default Class;
