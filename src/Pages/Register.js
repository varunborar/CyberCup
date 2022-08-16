import React from "react";

import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

import RegisterData from '../Data/Register.json';
import Section from "../Components/Section/Section";

import './Register.css';

const Register = (props) => {
    return (
        <Section id="events" name="Select the event to register for">
            <Row 
                className="event-container justify-content-center"
            >
                <Col
                    xs={8}
                    sm={8}
                    md={6}
                    lg={4}
                >
                    {
                        RegisterData.map((event) => {
                            return (
                                <Link to={"/register/" + event.path} key={event._id}>
                                    <div
                                        className="event"
                                    >
                                        {event.Title}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Col>
            </Row>
        </Section>
    )
}

export default Register;