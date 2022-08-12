import React from 'react';

import Section from '../../Components/Section/Section';
import GameCard from './GameCard';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import GameEventData from '../../Data/Games.json';

import './Games.css'

const Games = (props) => {
    return (
        <Section id="games" name="Gaming Events">
            <Row
                className="game-container justify-content-center"
            >
                {
                    GameEventData.map((Data) => {
                        return (
                            <Col
                                xs={{ span: 12 }}
                                sm={{ span: 12 }}
                                md={{ span: 6 }}
                                lg={{ span: 4 }}
                            >
                                <GameCard 
                                    key={Data._id}
                                    _id={Data._id}
                                    name={Data.name}
                                    image={Data.image}
                                ></GameCard>
                            </Col>
                        )
                    })
                }
            </Row>
        </Section>
    )
}

export default Games;