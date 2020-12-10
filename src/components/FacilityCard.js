import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import Trainer from "../pages/Trainer"



const FacilityCard = (props) => {

    const [show, setshow] = useState(false)


    const onClikcHanler = (props) => {

        const rooms = JSON.parse(localStorage.getItem("rooms") || "[]");
        console.log(props.item.roomName);
        const res = rooms.find(x => x.roomName == props.item.roomName)
        console.log(res);
        res.booked = "1"

        localStorage.setItem("rooms", JSON.stringify(rooms));

        console.log(rooms);
        setshow(true)

    }

    return (
        <div>
            <p>Test</p>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.item.roomName}</Card.Title>
                    <Card.Text>

                        Booked:  {props.item.booked}
                        {props.item.RoomName} has been booked by {props.item.trainer}
                    </Card.Text>
                    <Button onClick={() => onClikcHanler(props)} variant="primary">Book Room</Button>

                </Card.Body>
            </Card>

            {show ? <Trainer /> : null}
        </div>


    );
}

export default FacilityCard;
