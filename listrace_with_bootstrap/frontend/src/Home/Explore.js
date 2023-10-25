import React from 'react'
import HomeNavbar from './HomeNavbar'
import { Button, Card } from 'react-bootstrap';
import imagee1 from '../assets/images/explore/e1.jpg'
import imagee2 from '../assets/images/explore/e2.jpg'
import imagee3 from '../assets/images/explore/e4.jpg'
import orderfood from '../assets/images/explore/orderfood.jpg'
import booktable from '../assets/images/explore/booktable.jpg'
import outdoorroom from '../assets/images/explore/outdoorroom.jpg'
import officegathering from '../assets/images/explore/officegathring.jpg'
import celebratebday from '../assets/images/explore/celebratebday.jpg'
import outdoortable from '../assets/images/explore/outdoortable.jpg'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Explore() {
    const Navigate = useNavigate()

    const Booking = async () => {
        Navigate('/booking')
    }
    return (
        <>
            <HomeNavbar />
            <hr />
            <div class="section-header">
                <h2>explore</h2>
                {/* <p>Explore New place, food, culture around the Basil Bistro and many more</p> */}
                <div style={{ display: 'flex', flexDirection: 'row' }} className="Explorethings">
                    {/* 1 */}
                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={imagee1} />
                        </div>
                        <Card.Body>
                            <Card.Title>Tommy Helfinger Bar</Card.Title>
                            <Card.Text>
                                15% Off On Food & All Drink And +25% Upto ₹1000 Off Instantly With Card .
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }}>Buy Now</Button>
                        </Card.Body>
                    </Card>
                    {/* 2 */}

                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={imagee2} />
                        </div>
                        <Card.Body>
                            <Card.Title>Swim And Dine Resort</Card.Title>
                            <Card.Text>
                                25% Off On food & all Room. + Free Breakfast For Every Saturday Morning .
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>
                    {/* 3 */}

                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={imagee3} />
                        </div>
                        <Card.Body>
                            <Card.Title>Europe Tour</Card.Title>
                            <Card.Text>
                                25% off On First Booking Of New User  No Charge For Vehicle For Same User
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div class="section-header">
                <div style={{ display: 'flex', flexDirection: 'row' }} className="Explorethings">
                    {/* 4 */}

                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={orderfood} />
                        </div>
                        <Card.Body>
                            <Card.Title>Order Your Food </Card.Title>
                            <Card.Text>
                                35% Off On Your First Order & Drink And ,+25% Upto ₹2000 Off Instantly With Card .
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Order Now</Button>
                        </Card.Body>
                    </Card>

                    {/* 5 */}
                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={booktable} />
                        </div>
                        <Card.Body>
                            <Card.Title>Book A Table</Card.Title>
                            <Card.Text>
                                5% Off On Pre Booking For Only Inside Table + No Service Charge apply on Pre Booking .
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>

                    {/* 6 */}
                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={outdoorroom} />
                        </div>
                        <Card.Body>
                            <Card.Title>Outdoor Bed </Card.Title>
                            <Card.Text>
                                18% Off Only For Initial 5 User, Also Free Breakfast For Same User
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div class="section-header">
                <div style={{ display: 'flex', flexDirection: 'row' }} className="Explorethings">
                    {/* 7 */}

                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={officegathering} />
                        </div>
                        <Card.Body>
                            <Card.Title>Office Event Celebration</Card.Title>
                            <Card.Text>
                                28% Off On Office Event Celebration & All Drink,  And +15% Upto ₹9000 Off Instantly With UPI .
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>

                    {/* 8 */}
                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={celebratebday} />
                        </div>
                        <Card.Body>
                            <Card.Title>Dj Night </Card.Title>
                            <Card.Text>
                                15% Off for Couple And 20% Off For Solo Entry and They Get Extra Discount At The Time Of Entry.
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>

                    {/* 9 */}
                    <Card md={4} sm={6} style={{ border: 'none' }}>
                        <div className="image-container">
                            <Card.Img variant="top" src={outdoortable} />
                        </div>
                        <Card.Body>
                            <Card.Title>Outdoor Dinner </Card.Title>
                            <Card.Text>
                                22% off on Non-Veg Food , Only For Family Dinner, Also Get Extra Discount On UPI Payment.
                            </Card.Text>
                            <Button variant="outline-info" onClick={() => { Booking() }} >Book Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />


        </>
    )
}

export default Explore