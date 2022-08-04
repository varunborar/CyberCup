import React, { useState, useEffect} from "react";

import Section from "../../Components/Section/Section";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

import EventData from "../../Data/Events.json";

import "./Event.css";

const Event = (props) => {
    const [activeCard, setActiveCard] = useState(EventData[0]);
    useEffect(()=>{
        var active = document.getElementById(activeCard.name);
        var eventList = document.getElementsByClassName('event-card');
        for (var event of eventList){
            if(event.classList.contains("active")){
                event.classList.remove("active");
            }
        }
        active.classList.add("active");
    });

    const navigate=useNavigate();

    return(
        <Section id="event" name="Events">
            <Row 
                className="event-container justify-content-center"
            >
            <Col
                xs={{ span: 12}}
                sm={{ span: 12}}
                md={{ span: 6}}
                lg={{ span: 4}}
            >
                {
                    EventData.map((cardData)=> {
                        return (
                            <div 
                                className="event-card"
                                key={cardData._id}
                                id={cardData.name}
                                data={cardData}
                                onClick={()=>{
                                        setActiveCard(cardData);
                                    }
                                }
                            >
                                <h2>{cardData.name}</h2>
                                <p>{cardData.short}</p>
                            </div>
                        )
                    })
                }
            </Col>
            <Col id="desc" className="desc-container justify-content-start">
                <h1>{activeCard.name}</h1>
                <p>{activeCard.long}</p>
                <Button variant="danger" className="register-btn button" onClick={() => {window.scrollTo(0,0);
                navigate("/register");}}>Register Now</Button>
                <label>Registrations will begin soon!</label>
            </Col>
                
            </Row>
        </Section>
    )
}

export default Event;