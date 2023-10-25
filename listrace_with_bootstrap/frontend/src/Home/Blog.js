import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import HomeNavbar from './HomeNavbar';
import Delicious1 from '../assets/images/blog/D1.jpg';
import special1 from '../assets/images/blog/s1.jpg';
import offer2 from '../assets/images/blog/o2.jpg'
import Footer from './Footer';

function Blog() {
    const [isCollapsed1, setCollapsed1] = useState(false);
    const [isCollapsed2, setCollapsed2] = useState(false);
    const [isCollapsed3, setCollapsed3] = useState(false);

    const handleCollapse = (section) => {
        if (section === 1) {
            setCollapsed1(!isCollapsed1);
        } else if (section === 2) {
            setCollapsed2(!isCollapsed2);
        } else if (section === 3) {
            setCollapsed3(!isCollapsed3);
        }
    };

    return (
        <>
            <HomeNavbar />
            <hr />
            <Container fluid className="jumbotron">
                <h1>Enjoy our special menu Every sunday and friday ! </h1>
                <p>
                    We are delighted to serve you the best food in town. Check out our <span>new menu</span>, special events, and <span>exclusive offers</span>.
                    Stay connected with us to stay informed about all the <span>exciting updates</span>, events, and offers. Follow us on social media, subscribe to our <span>newsletter</span>, or simply visit our website for the latest news and reservations.
                </p>
            </Container >
            <section id="works" className="works">
                <Container>
                    <Row>
                        <Col md={4} sm={6}>
                            <div className="single-how-works">
                                <img
                                    className="d-block w-100 blog-image"
                                    src={Delicious1}
                                    alt="First slide"
                                />
                                <h2>Delicious New Menu</h2>
                                <p>
                                    pizza, dish of Italian origin consisting  of a flattened disk of
                                </p>
                                <Collapse in={isCollapsed1}>
                                    <p>
                                        bread dough topped with some combination of olive oil.
                                    </p>
                                </Collapse>
                                <Button variant="outline-info" onClick={() => handleCollapse(1)}>
                                    Read More
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="single-how-works">
                                <img
                                    className="d-block w-100 blog-image"
                                    src={special1}
                                    alt="First slide"
                                />
                                <h2>Special Events</h2>
                                <p>
                                    Don't miss out on our upcoming events and special promotions.
                                </p>
                                <Collapse in={isCollapsed2}>
                                    <p>
                                        blog regularly for announcements and exclusive .
                                    </p>
                                </Collapse>
                                <Button variant="outline-info" onClick={() => handleCollapse(2)}>
                                    Read More
                                </Button>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="single-how-works">
                                <img
                                    className="d-block w-100 blog-image"
                                    src={offer2}
                                    alt="First slide"
                                />
                                <h2>Offer for Customers</h2>
                                <p>
                                    Get flat 50% off (upto Rs. 100) and get Rs. 25 to Rs. 100
                                </p>
                                <Collapse in={isCollapsed3}>
                                    <p>
                                        Paytm cashback on orders paid via PayTM Postpaid.

                                    </p>

                                </Collapse>
                                <Button variant="outline-info" onClick={() => handleCollapse(3)}>
                                    Read More
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Blog;

