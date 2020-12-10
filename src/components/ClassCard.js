import React, { useState } from 'react';
import  { Redirect, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
;


const ClassCard = (props) => {
    const history = useHistory();

    const onClikcHanler = () => {
        let path = '/Class'; 
        history.push(path, props);
    }

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
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


















