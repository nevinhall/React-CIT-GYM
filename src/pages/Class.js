import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const bookVist = (props) => {
    var userLogedIn = JSON.parse(localStorage.getItem("userLogedIn"));
    var currentClasses = JSON.parse(localStorage.getItem("classes"));
    console.log("booked");
  

    var bookClass = currentClasses.find(x => x.clubName == props)
    bookClass.members.push(userLogedIn.fname)

    var updatedClasses = currentClasses.filter(item => item !== bookClass)
    updatedClasses.push(bookClass)

    console.log(updatedClasses);
    localStorage.setItem("classes", JSON.stringify(updatedClasses));







    localStorage.setItem("classes", JSON.stringify(currentClasses));
}


const Class = (props) => {
    return (
        <div className="App">
            {console.log(props.history)}

            <p>{props.location.state.item.clubName}</p>

            <div>
                <p>The {props.location.state.item.clubName} is a {props.location.state.item.typeOfActivity} type of activity. The trainer of the class is {props.location.state.item.trainer} the location of the class is {props.location.state.item.location}
                 the maximum capacity of the class is {props.location.state.item.maxSize} on average {props.location.state.item.numCalories} calories burned during this class
                  the duration of the class is {props.location.state.item.operatingDate} the duration of the class is
                 {props.location.state.durationOfClass}.
                 </p>

                <Button onClick={() => bookVist(props.location.state.item.clubName)}>Book Vist</Button>


            </div>
        </div>
    );
}
export default Class;
