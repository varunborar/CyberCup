import React from 'react';

import Animation from './Animation';
import Countdown from "../../Components/Countdown/Countdown";
import "./Landing.css";
import CyberCup from "./Resources/LLW.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Landing(props) {
    let navigate = useNavigate();
    const routeChange = (event) => {
        navigate(event.target.attributes.redirect.nodeValue);
        // console.log();
    }
    return (
        <div className="landing">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col className="left-col flex-column"
                        xs={{ span: 11, order: 1 }}
                        sm={{ span: 11, order: 1 }}
                        md={{ span: 8, order: 1 }}
                        lg={{ span: 8, order: 1 }}
                    >
                        <img
                            src={CyberCup}
                            width="100%"
                            className="ccl"
                            alt="Cyber Cup Logo"
                        />
                        <h1 className="date">
                            21<sup>st</sup> - 23<sup>rd</sup> September, 2022
                        </h1>
                    </Col>
                    <Col className="right-col justify-content-center align-items-center"
                        xs={{ span: 12, order: 2 }}
                        sm={{ span: 12, order: 2 }}
                        md={{ span: 8, order: 2 }}
                        lg={{ span: 5, order: 2 }}
                    >
                        <Countdown
                            targetDate={new Date("2022-09-21")}
                            ExpiredMessage="Let the Events Begin!"
                        />
                        <div className="actions d-flex justify-content-center flex-column flex-md-row">
                            <Button variant="primary m-2" onClick={() => window.location = "https://gzqyk482yst.typeform.com/to/UfGknRJV"}>Sponsor Us</Button>
                            <Button variant="danger m-2" redirect="/register" onClick={routeChange}>Register</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Animation></Animation>
        </div>
    )
}
export default Landing;