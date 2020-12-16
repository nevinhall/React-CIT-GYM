import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import Trainer from "../pages/Trainer"
import NavBar from '../components/NavBar'





const FacilityCard = (props) => {
    const history = useHistory();

    const [show, setshow] = useState(false)


    const onClikcHanler = (props) => {

        const rooms = JSON.parse(localStorage.getItem("faclities") || "[]");
        console.log("1", rooms);
        const res = rooms.find(x => x.roomName == props.item.roomName)
        console.log("1", res);
        res.booked = "1"

        var updatedFaclities = rooms.filter(item => item.roomName !== props.item.roomName)


        updatedFaclities.push(res)

        console.log("updated"+ updatedFaclities);


        localStorage.setItem("faclities", JSON.stringify( updatedFaclities));
       
        window.location.reload();


        // localStorage.setItem("rooms", JSON.stringify(rooms));

        console.log(rooms);
        setshow(true)
        console.log(props.item)

    }

    return (

        <div>
       
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


        </div>


    );
}

export default FacilityCard;
