import React from "react";

import './TeamCard.css';

import GithubIcon from './Resources/github.png';
import LinkedInIcon from './Resources/linkedin.png';
import EmailIcon from './Resources/email.png';

const TeamCard = (props) => {
    return(
        <div className="team-card">
            <img 
                src={process.env.PUBLIC_URL + "/assets/images/" + props.image}
                alt={props.name}
                className="dp"
            />    
            <span className="name">{props.name}</span>
            <div className="icon-container">
                <a href={props.github} className="icon-link">
                    <img src={GithubIcon} alt="Github Icon" className="icon" />
                </a>
                <a href={props.linkedin} className="icon-link">
                    <img src={LinkedInIcon} alt="LinkedIn Icon" className="icon" />
                </a>
                <a href={"mailto:"+props.email} className="icon-link">
                    <img src={EmailIcon} alt="Email Icon" className="icon" />
                </a>
            </div>
        </div>
    )
}

export default TeamCard;