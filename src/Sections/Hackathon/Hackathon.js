import React, { useState, useEffect} from "react";

import Section from "../../Components/Section/Section";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import HackathonData from "../../Data/Hackathons.json";

import "./Hackathon.css";

const Hackathon = (props) => {
    const [activeCard, setActiveCard] = useState(HackathonData[0]);
    useEffect(()=>{
        var active = document.getElementById(activeCard.name);
        var eventList = document.getElementsByClassName('hackathon-card');
        for (var event of eventList){
            if(event.classList.contains("active")){
                event.classList.remove("active");
            }
        }
        active.classList.add("active");
    });

    return(
        <Section id="hackathon" name="Hackathons">
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
                    HackathonData.map((cardData)=> {
                        return (
                            <div 
                                className="hackathon-card"
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
            <Col id="desc2" className="desc-container justify-content-start">
                <h1>{activeCard.name}</h1>
                <p>{activeCard.long}</p>
                <Button variant="danger" className="register-btn button disabled">Register Now</Button>
                <label>Registrations will begin soon!</label>
            </Col>
                
            </Row>
        </Section>
    )
}

export default Hackathon;