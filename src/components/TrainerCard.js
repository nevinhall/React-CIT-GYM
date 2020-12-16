import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

import NavBar from '../components/NavBar'
<NavBar />



const TrainerCard = (props) => {
    const history = useHistory();
    console.log(props)


    const bookTrainer = (props) => {
        var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));


        var currentTrainers = JSON.parse(localStorage.getItem("trainers"));
        console.log(userLogedIn);


        var bookTrainer = currentTrainers.find(x => x.trainer == props)
        bookTrainer.members.push(userLogedIn.fname)

        var updatedTrainers = currentTrainers.filter(item => item !== bookTrainer)
        updatedTrainers.push(bookTrainer)

        console.log(updatedTrainers);


        localStorage.setItem("trainers", JSON.stringify(updatedTrainers));
        // localStorage.setItem("classes", JSON.stringify(currentTrainers ));


        let path = '/myprofile';
        history.push(path, props);
    }

    return (
    
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.item.trainer}</Card.Title>
                <Card.Text>
                    {props.item.trainer} is avaible for booking ]
                    click below to book an appointment
                </Card.Text>
                <Card.Text>
                    Duration: {props.item.durationOfClass}
                </Card.Text>
                <Button onClick={() => bookTrainer(props.item.trainer)} variant="primary">Book Appointment</Button>

            </Card.Body>
        </Card>
    )
}
export default TrainerCard 