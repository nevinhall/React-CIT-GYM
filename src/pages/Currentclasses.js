import React, { Component, useState, useEffect } from 'react';
import { Image, Col, Row, Button, Container, Form, Table } from 'react-bootstrap';

import ClassCard from '../components/ClassCard'
import '../css/index.css';

import NavBar from '../components/NavBar'
import Login from './Login';




const CurrentClasses = () => {

    const [filter, setFilter] = useState("")
    const [data, setData] = useState([])


    useEffect(() => {
        var currentClasses = JSON.parse(localStorage.getItem("classes"));
        if (currentClasses == null) currentClasses = [
            {
                clubName: "Rowing Club",
                trainer: "John Doe",
                typeOfActivity: "physical",
                numCalories: "504",
                operatingDate: "01/11/2020",
                img: "",
                maxSize: "5",
                durationOfClass: "60mins",
                location: "Lake Blue",
                members: []
            },
            {
                clubName: "Arobics",
                trainer: "Jake white",
                typeOfActivity: "spiritual",
                numCalories: "200",
                operatingDate: "21/11/2020",
                img: "a",
                maxSize: "15",
                durationOfClass: "30mins",
                location: "Hall B",
                members: []
            },
            {
                clubName: "Spinning",
                trainer: "John Doe",
                typeOfActivity: "physical",
                numCalories: "1000",
                operatingDate: "18/11/2020",
                img: "",
                maxSize: "5",
                durationOfClass: "45mins",
                location: "Hall A",
                members: []
            },
            {
                clubName: "Yoga",
                trainer: "Amer Blue",
                typeOfActivity: "spiritual",
                numCalories: "700",
                operatingDate: "06/11/2020",
                img: "",
                maxSize: "20",
                durationOfClass: "45mins",
                location: "yogaPad",
                members: []
            }
        ];
        setData(currentClasses)
        console.log("t" + currentClasses);

        return localStorage.setItem("classes", JSON.stringify(currentClasses));

    }, [])

    const handleChange = (event) => {
        console.log("f" + event.target.value);
        setFilter(event.target.value)
    };


    console.log(data);

    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
            item.clubName.toLowerCase().includes(lowercasedFilter) ||
            item.durationOfClass.toLowerCase().includes(lowercasedFilter) ||
            item.trainer.toLowerCase().includes(lowercasedFilter) ||
            item.operatingDate.toLowerCase().includes(lowercasedFilter)
        );
    });

    return (
        <div>
            <NavBar item={true} />
            <div className="d-flex justify-content-center">
                <Container>
                    <Row>
                        <div className="d-flex justify-content-center w-100 p-5">
                            <input className="w-100" value={filter} onChange={handleChange} />
                        </div>
                    </Row>

                    <Row className="d-flex justify-content-center">
                        {filteredData.map(item => (
                            <Col className="d-flex justify-content-center p-2">
                                <ClassCard item={item} />
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </div>
    );

}






export default CurrentClasses;




