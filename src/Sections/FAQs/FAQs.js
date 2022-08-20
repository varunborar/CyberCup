import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Section from "../../Components/Section/Section";

import FAQData from '../../Data/FAQ.json';
import './FAQ.css';

const FAQs = () => {
    return (
        <div className="faq">
            <Section id="faqs" name="FAQs">
                <Col
                    className="justify-content-center faq-col"
                    xs={{ span: 11 }}
                    sm={{ span: 11 }}
                    md={{ span: 9 }}
                    lg={{ span: 9 }}
                >
                    <Accordion>
                        {
                            FAQData.map((faq) => {
                                return (
                                    <Accordion.Item eventKey={faq._id} key={faq._id} className="acc-item">
                                        <Accordion.Header className="acc-header">{faq.header}</Accordion.Header>
                                        <Accordion.Body>{faq.body} 
                                        <a target='_blank' className="reach-out" href="https://znap.link/cybercup22">{faq.link}</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                    <span className="reachout">Not found what you were looking for? <a href="mailto:support@mg.cybercup.live" className="reach-out">Reach out to us.</a></span>
                </Col>
            </Section>
        </div>
    )
}

export default FAQs; 