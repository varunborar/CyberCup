import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import './Games.css';

const GameCard = (props) => {
    let navigate = useNavigate();
    const routeChange = (event) => {
        navigate(event.target.attributes.redirect.nodeValue);
        // console.log();
    }
    return (
        <div className="game-card">
            <Row
                className="justify-content-center"
            >
                <Col
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}

                    className="align-items-center justify-content-center"
                >
                    <img
                        src={process.env.PUBLIC_URL + "/assets/images/" + props.image}
                        alt={props.name + " Logo"}
                        className="game-icon"
                    >

                    </img>
                </Col>
                <Col
                    className="align-items-center justify-content-center"
                >
                    <h2 className="game-title">{props.name}</h2>
                    <Button variant="danger" className="register-btn button" redirect={"/register/"+props.path} onClick={routeChange}>Register Now</Button>
                    {/* <label>Registrations will begin soon!</label> */}
                </Col>

            </Row>
        </div>
    )
}

export default GameCard;