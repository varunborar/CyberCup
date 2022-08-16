import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Team.css';
import TeamData from '../../Data/Team.json';

import TeamCard from '../../Components/Team Card/TeamCard';
import Section from '../../Components/Section/Section';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide:5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide:5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide:2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide:1
    }
};

const Team = (props) => {
    return (
        <Section id="team" name="Core Team">
            <Carousel
                rewind
                rtl={false}
                shouldResetAutoplay
                pauseOnHover
                showDots={true}
                responsive={responsive}
                ssr={false}
                infinite={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside={true}
            >
                {
                    TeamData.map((member) => {
                        return (

                            <TeamCard
                                key={member._id}
                                name={member.name}
                                image={member.dp}
                                linkedin={member.linkedin}
                                github={member.github}
                                email={member.email}
                            />

                        )
                    })
                }
            </Carousel>
        </Section>
    )
}

export default Team;
