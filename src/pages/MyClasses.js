import React, { Component, useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

import ClassCard from '../components/ClassCard'
import '../css/index.css';

import NavBar from '../components/NavBar'



const MyClasses = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        var currentClasses = JSON.parse(localStorage.getItem("classes"));
        setData(currentClasses)

        return localStorage.setItem("classes", JSON.stringify(currentClasses));

    }, [])


    const cancelBooking = () => {
        // var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));

        // var filteredData = data.filter(item => item.members.find(x => x = "Nevin"));
        // // bookClass.members.push(userLogedIn.fname)

        // var updatedClasses = currentClasses.filter(item => item !== bookClass)
        // updatedClasses.push(bookClass)

        // console.log(updatedClasses);


        // localStorage.setItem("classes", JSON.stringify(updatedClasses));
        // localStorage.setItem("classes", JSON.stringify(currentClasses));

        // let path = '/myClasses'; 
        // history.push(path, props);


    }

    const filteredData = data.filter(item => item.members.find(x => x == "Nevin"));

    return (
        <div className="d-flex justify-content-around p-5">
            <h1 className="font-weight-bold p-5" >Upcoming Classes</h1>
            
            {filteredData.map(item => (

                <div>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{item.clubName}</Card.Title>
                            <Card.Text>
                                {item.clubName} is ran by {item.trainer}
                    the next class is scheduled for {item.operatingDate}
                            </Card.Text>
                            <Card.Text>
                                Duration: {item.durationOfClass}
                            </Card.Text>
                            <Button onClick={() => cancelBooking} variant="primary">Cancel Booking</Button>

                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );

}






export default MyClasses;