import React from 'react';
import { Image, Col, Row, Button, Container, Form, Nav, Carousel } from 'react-bootstrap';
import '../css/index.css';


import NavBar from '../components/NavBar'
import gym1 from '../images/gym1.jpg'
import gym2 from '../images/gym2.jpg'
import gym3 from '../images/gym-3.jpg'
import SignUpComponent from '../components/signUpComponent';



const Home = () => {
    return (
        <div>
            <NavBar item={false} />
            <div className="h-25">

                <Carousel >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={gym1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>State of the Art Facilities</h3>
                            <p>We offer a wide range of class for all levels.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={gym2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Avaible to all Students</h3>
                            <p>All postgrad, undergrad and partime students are welcoeme !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={gym3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Book your class !</h3>
                            <p>Intrested in trying that class? Book your place today !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <SignUpComponent />
                    </Carousel.Item>
                </Carousel>

                
            </div>


        </div>
    )
}

export default Home