import React, { Component, useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

import ClassCard from '../components/ClassCard'



const MyClasses = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        var currentClasses = JSON.parse(localStorage.getItem("classes"));
        setData(currentClasses)

        return localStorage.setItem("classes", JSON.stringify(currentClasses));

    }, [])

    const filteredData = data.filter(item => item.members.find(x => x == "Nevin"));
    var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));


    const cancelBooking = () => {

        console.log(filteredData[0].members);
        var cancelClass = filteredData
        cancelClass = cancelClass[0].members.filter(item => item !== userLogedIn.fname)
      
    
        console.log( "r" + cancelClass[0]);

        console.log(userLogedIn);

        // var updatedClasses = currentClasses.filter(item => item !== bookClass)
        // updatedClasses.push(bookClass)

        // console.log(updatedClasses);


        // localStorage.setItem("classes", JSON.stringify(updatedClasses));
        // localStorage.setItem("classes", JSON.stringify(currentClasses));

        // let path = '/myClasses'; 
        // history.push(path, props);


    }



    return (
        <div>


            {filteredData.map(item => (
                //   <ClassCard item={item}/>

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
                            <Button onClick={cancelBooking} variant="primary">Cancel Booking</Button>

                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );

}






export default MyClasses;