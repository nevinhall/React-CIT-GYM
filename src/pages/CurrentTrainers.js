import React, { Component, useState, useEffect } from 'react';
import { Image, Col, Row, Button, Container, Form, Table } from 'react-bootstrap';

import TrainerCard from '../components/TrainerCard'
import '../css/index.css';

import NavBar from '../components/NavBar'
import Login from './Login';




const CurrentTrainers = () => {

    const [filter, setFilter] = useState("")
    const [data, setData] = useState([])

  useEffect(() => {
    var trainers = JSON.parse(localStorage.getItem("trainers"));
    if (trainers  == null) trainers  = [
      {
        trainer: "Jane Doe",
        members: ["Nevin"]
      },
      {
        trainer: "Jake white",
        members: []
      },
      {
        trainer: "John Doe",
        members: []
      },
      {
        trainer: "Amer Blue",
        members: []
      }
    ];
    setData(trainers)
    console.log("t" + trainers);

    return localStorage.setItem("trainers", JSON.stringify(trainers));

  }, [])



    const handleChange = (event) => {
        console.log("f" + event.target.value);
        setFilter(event.target.value)
    };


    console.log(data);

    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
            item.trainer.toLowerCase().includes(lowercasedFilter) 
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
                                <TrainerCard item={item} />
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </div>
    );

}






export default CurrentTrainers;




