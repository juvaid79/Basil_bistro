import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import HomeNavbar from './HomeNavbar';
import UserImage from '../assets/images/clients/user.jpg';
import Footer from './Footer';

function Review() {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [userName, setUserName] = useState('');
    const [expandedReviews, setExpandedReviews] = useState([]);

    const toggleExpand = (index) => {
        if (expandedReviews.includes(index)) {
            setExpandedReviews(expandedReviews.filter((item) => item !== index));
        } else {
            setExpandedReviews([...expandedReviews, index]);
        }
    };


    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (reviewText && userName) {
            const reviewWithRating = {
                userName: userName,
                reviewText: reviewText,
            };
            setReviews([...reviews, reviewWithRating]);
            setReviewText('');
            setUserName('');
        }
    };

    return (
        <>
            <HomeNavbar />
            <hr />
            <Container className="center-container">
                <Row>
                    <Col className="custom-padding">
                        <h3>Here <span>You</span> Can Write <span>Your</span> Review</h3>

                        <Form onSubmit={handleReviewSubmit}>
                            <Form.Group controlId="userName">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={userName}
                                    className="username-in-review"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="reviewText">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Here You Can Write ..."
                                    value={reviewText}
                                    className="username-in-review"
                                    onChange={(e) => setReviewText(e.target.value)}
                                />
                            </Form.Group>
                            <Row className="text-center">
                                <Col>
                                    <Button variant="outline-info" type="submit" className="Review">
                                        Submit Review
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container className="review-container">
                <h3>Customer <span>Reviews</span></h3>
                <Row>
                    {reviews.length === 0 ? (
                        <p>No reviews yet.</p>
                    ) : (
                        reviews.map((review, index) => (
                            <Col key={index} md={4} className="custom-padding">
                                <Card className="review-card">
                                    <Card.Body>
                                        <Row>
                                            <Col sm={4} >
                                                <img
                                                    src={UserImage}
                                                    alt="User Avatar"
                                                    className="avatar-image"
                                                />
                                            </Col>
                                            <Col sm={6} className='customer-review'>

                                                <Card.Title><span>{review.userName}</span></Card.Title>
                                                <span>⭐⭐⭐⭐⭐</span>
                                                <Card.Text>
                                                    {expandedReviews.includes(index)
                                                        ? review.reviewText
                                                        : review.reviewText.slice(0, 50) + '.....'}
                                                </Card.Text>
                                                <Button variant='outline-info' onClick={() => toggleExpand(index)}>
                                                    {expandedReviews.includes(index) ? 'Show Less' : 'Show More'}
                                                </Button >
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Review;
