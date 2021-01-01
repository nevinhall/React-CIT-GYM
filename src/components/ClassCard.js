import React, { useState } from 'react';
import  { Redirect, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

import spinning from '../images/spiinong.jpg'
import rowing from '../images/rowing.jpg'
import yoga from '../images/yoga.jpg'
import arobics from '../images/arobics.jpg'



import NavBar from '../components/NavBar'
<NavBar />



const ClassCard = (props) => {
 
    console.log(props.item.img);
    const history = useHistory();

    let t = spinning

  


    const onClikcHanler = () => {
        let path = '/Class'; 
        history.push(path, props);
    }

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={t} alt={"class Image"} />
            <Card.Body>
                <Card.Title>{props.item.clubName}</Card.Title>
                <Card.Text>
                    {props.item.clubName} is ran by {props.item.trainer}
                    the next class is scheduled for {props.item.operatingDate}
                </Card.Text>
                <Card.Text>
                    Duration: {props.item.durationOfClass}
                </Card.Text>
                <Button onClick={() => onClikcHanler()} variant="primary">Visit Class</Button>

            </Card.Body>
        </Card>








    );
}

export default  ClassCard 


















