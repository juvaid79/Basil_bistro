import React, { useState, useEffect } from 'react';
import Navbar from './HomeNavbar'
import { Container, Row, Col, Button, Card, Carousel, Form, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faNetworkWired, faRoad, faUtensils, faHotel, faClinicMedical, faCar, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import imagee1 from '../assets/images/explore/e1.jpg'
import imagee2 from '../assets/images/explore/e2.jpg'
import imagee3 from '../assets/images/explore/e4.jpg'
import client1 from '../assets/images/clients/client1.jpg'
import client2 from '../assets/images/clients/client2.jpg'
import client3 from '../assets/images/clients/client3.jpg'
import blog1 from '../assets/images/blog/b1.jpg'
import blog2 from '../assets/images/blog/b2.jpg'
import blog3 from '../assets/images/blog/b3.jpg'
import Footer from './Footer';

function Home() {
  const initialData = [
    { title: 'listings', endpoint: 200, value: 0 },
    { title: 'listing categories', endpoint: 120, value: 0 },
    { title: 'visitors', endpoint: 160, value: 0 },
    { title: 'happy clients', endpoint: 150, value: 0 },
  ];

  const [statisticsData, setStatisticsData] = useState(initialData);
  const [hovervalue, setHoverValue] = useState(false);
  const [cleardemo, setClearDemo] = useState(null)
  const handleMouseEnter = () => {
    setHoverValue(true)
  };

  const handleMouseLeave = () => {
    setHoverValue(false)
  }

  const startCounting = () => {
    if (hovervalue) {
      const demo = setInterval(() => {
        setStatisticsData((prevData) =>
          prevData.map((stat, i) => {
            const step = Math.ceil(stat.endpoint / 100);
            const newValue = Math.min(stat.endpoint, stat.value + step);
            // console.log("newvalue", newValue)
            return { ...stat, value: newValue };
          })
        );
      }, 10);
      setClearDemo(demo)
    }
  };



  useEffect(() => {
    if (hovervalue) {
      startCounting()
    } else {
      clearInterval(cleardemo)
    }
  }, [hovervalue])


  // console.log("statisticsData", statisticsData)
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
      <Navbar />

      {/* welcome Start  */}
      <section id="home" className="welcome-hero">
        <Container>
          <Row>
            <Col md={6} className="welcome-hero-txt">
              <h2>best place to find and explore that <br />  all you need </h2>
              <p>
                Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Welcome End  */}

      {/* List Start From Here  */}
      <div>
        <section id="list-topics" className="list-topics">
          <Container>
            <div className="list-topics-content">
              <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className="single-list-topics-content">
                    <div className="single-list-topics-icon">
                      <FontAwesomeIcon icon={faUtensils} size="2x" />
                    </div>
                    <p><a href="#restaurant">restaurant</a></p>
                    <p>150 listings</p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className="single-list-topics-content">
                    <div className="single-list-topics-icon">
                      <FontAwesomeIcon icon={faHotel} size="2x" />
                    </div>
                    <p><a href="#hotels">hotels</a></p>
                    <p>185 listings</p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className="single-list-topics-content">
                    <div className="single-list-topics-icon">
                      <FontAwesomeIcon icon={faClinicMedical} size="2x" />
                    </div>
                    <p><a href="#healthcare">healthcare</a></p>
                    <p>200 listings</p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <div className="single-list-topics-content">
                    <div className="single-list-topics-icon">
                      <FontAwesomeIcon icon={faCar} size="2x" />
                    </div>
                    <p><a href="#automotion">automotion</a></p>
                    <p>120 listings</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
      {/* List End From Here  */}


      {/* Work Start From Here  */}
      <section id="works" className="works">
        <Container>
          <div className="section-header">
            <h2>What We Have</h2>
            <p>Learn More about how our website works</p>
          </div>
          <Row>
            <Col md={4} sm={6}>
              <div className="single-how-works">
                <FontAwesomeIcon icon={faLightbulb} size="3x" />
                <h2>Choose what to do</h2>
                <p>
                   what to do empowers individuals to shape their own destiny It's a aspect of human autonomy and self-determination.
                </p>
                <Collapse in={isCollapsed1}>
                  <div>
                    <p>
                      <h5>Learning and Growth: </h5>
                      Our choices, both good and bad, are opportunities for personal growth and learning. They help us evolve and become wiser individuals.
                    </p>
                  </div>
                </Collapse>
                <Button variant="outline-info" onClick={() => handleCollapse(1)}>
                  Read More
                </Button>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="single-how-works">
                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                <h2>Finding Your Flavor</h2>
                <p>
                  The concept of "finding your flavor" is all about discovering what truly resonates with you and brings joy to your life.
                </p>
                <Collapse in={isCollapsed2}>
                  <div>
                    <h5> Taking Action</h5>
                    <p>
                      Break your goals down into actionable steps. Create a plan to ensure you're consistently moving toward your vision.
                    </p>
                  </div>
                </Collapse>
                <Button variant="outline-info" onClick={() => handleCollapse(2)}>
                  Read More
                </Button>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="single-how-works">
                <FontAwesomeIcon icon={faRoad} size="3x" />
                <h2>Explore amazing places</h2>
                <p>
                Traveling to amazing places exposes individuals to different cultures, traditions, and ways of life.
                </p>
                <Collapse in={isCollapsed3}>
                  <div>
                    <p>
                      <h5>Cultural Enrichment </h5>
                    This cultural enrichment can lead to greater tolerance, empathy, and appreciation for the diversity of our global community.
                    </p>
                  </div>
                </Collapse>
                <Button variant="outline-info" onClick={() => handleCollapse(3)}>
                  Read More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Works End From Here  */}

      {/* Explore Start  */}
      {/* style={{ border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} */}


      <div class="section-header">
        <h2>explore</h2>
        <p>Explore New place, food, culture around the Basil Bistro and many more</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }} className="Explorethings">
        <Card md={4} sm={6} style={{ border: 'none' }}>
          <div className="image-container">
            <Card.Img variant="top" src={imagee1} />
          </div>
          <Card.Body>
            <Card.Title>Tommy Helfinger Bar</Card.Title>
            <Card.Text>
              15% Off On Food & All Drink And +25% Upto ₹1000 Off Instantly With Card .
            </Card.Text>
            <Button variant="outline-info" href='/explore'>View Now</Button>
          </Card.Body>
        </Card>
        <Card md={4} sm={6} style={{ border: 'none' }}>
          <div className="image-container">
            <Card.Img variant="top" src={imagee2} />
          </div>
          <Card.Body>
            <Card.Title>Swim And Dine Resort</Card.Title>
            <Card.Text>
              25% Off On food & all Room. + Free Breakfast For Every Saturday Morning .
            </Card.Text>
            <Button variant="outline-info" href='/explore'>View Now</Button>
          </Card.Body>
        </Card>
        <Card md={4} sm={6} style={{ border: 'none' }}>
          <div className="image-container">
            <Card.Img variant="top" src={imagee3} />
          </div>
          <Card.Body>
            <Card.Title>Europe Tour</Card.Title>
            <Card.Text>
              25% off On First Booking Of New User  No Charge For Vehicle For Same User
            </Card.Text>
            <Button variant="outline-info" href='/explore'>View Now</Button>
          </Card.Body>
        </Card>
      </div>

      {/* Explore End  */}

      {/* Client Review Start  */}
      <section id="reviews" className="reviews">
        <div className="section-header">
          <h2>Customers Reviews</h2>
          <p>What our clients say about us</p>
        </div>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img src={client1} alt="Client 1" className="carousel-image" />
            <Carousel.Caption>
              <h3>Juliet</h3>
              <p>
                I really like the atmosphere And nice coffee. This is a good place to study and chill with friends.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img src={client2} alt="Client 2" className="carousel-image" />
            <Carousel.Caption>
              <h3>Yorick</h3>
              <p>
                This place is amazing. They have the best coffee and show the best attitude to their customers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img src={client3} alt="Client 3" className="carousel-image" />
            <Carousel.Caption>
              <h3>Austin Distel</h3>
              <p>
                This place is very well organized compared to other places. The food and music of your choice.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Client Review End  */}

      {/* statistics start from here   */}
      <div className="section-header">
        <h2>Listing Our Connection</h2>
        <p>How Much We Have Connection </p>
      </div>
      <section id="statistics" className="statistics">
        <Container className="statistics-container">
          <Row>
            {statisticsData.map((stat, index) => (
              <Col
                key={index}
                md={3}
                sm={6}
                onMouseEnter={() => handleMouseEnter(index)}
                handleMouseLeave={() => handleMouseLeave()}
                className="statistics-col">
                <div className="single-ststistics-box">
                  <div className="statistics-content">
                    <div className="counter">{stat.value}
                      <span className="light-blue-span">K</span>
                    </div>
                    <h3>{stat.title}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* statistics End From here  */}

      {/* News and Articles Start From Here  */}
      <section id="blog" className="blog">
        <Container>
          <div className="section-header">
            <h2>news and articles</h2>
            <p>Always up to date with our latest News and Articles</p>
          </div>
          <div className="blog-content">
            <Row>
              <Col md={4} sm={6}>
                <div className="single-blog-item">
                  <div className="single-blog-item-img">
                    <img src={blog1} alt="blog" className='blog-image' />
                  </div>
                  <div className="single-blog-item-txt">
                    <h2>
                      <a href="#how">Find Your Desired Place .</a>
                    </h2>
                    <h4>
                      Posted <span>By</span> <a href="#admin">Admin</a> October 2023
                    </h4>
                    <p className="justified-text">
                      In the digital age, restaurant discovery apps have become a valuable tool for diners
                      Platforms like Yelp, TripAdvisor, Google Maps, and OpenTable provide extensive databases of restaurants,
                      complete with reviews, menus, and real-time availability.
                    </p>
                    <hr></hr>
                    <FontAwesomeIcon icon={faHeart} /> &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faComment} />   &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faShare} />
                  </div>
                </div>
              </Col>
              <Col md={4} sm={6}>
                <div className="single-blog-item">
                  <div className="single-blog-item-img">
                    <img src={blog2} alt="blog" className='blog-image' />
                  </div>
                  <div className="single-blog-item-txt">
                    <h2>
                      <a href="#how"> Exclusive Offer Customers .</a>
                    </h2>
                    <h4>
                      Posted <span>By</span> <a href="#admin">admin</a> October 2023
                    </h4>
                    <p className="justified-text">
                      Get flat 50% off (upto Rs. 100) and get Rs. 25 to Rs. 100 Paytm cashback on orders paid via PayTM Postpaid.
                      Applicable only on Paytm postpaid.
                      Users must select PayTM as mode of payment and link their wallet before applying the coupon And Redeem Our Offers.
                    </p>
                    <hr></hr>
                    <FontAwesomeIcon icon={faHeart} /> &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faComment} />&nbsp; &nbsp;
                    <FontAwesomeIcon icon={faShare} />
                  </div>
                </div>
              </Col>
              <Col md={4} sm={6}>
                <div className="single-blog-item">
                  <div className="single-blog-item-img">
                    <img src={blog3} alt="blog" className='blog-image' />
                  </div>
                  <div className="single-blog-item-txt">
                    <h2>
                      <a href="#how">Latest Event At Basil Bistro .</a>
                    </h2>
                    <h4>
                      Posted <span>By</span> <a href="#admin">admin</a>October 2023
                    </h4>
                    <p className="justified-text">
                      Exclusive Seasonal Menu , Our talented chefs have crafted a special menu inspired by the season's freshest ingredients. Indulge in a variety of dishes that capture the essence of autumn,
                      each expertly paired with our finest wines and cocktails.
                    </p>
                    <hr></hr>
                    <FontAwesomeIcon icon={faHeart} /> &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faComment} /> &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faShare} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* News and Articles End Here  */}

      {/* Add Business From Here  */}
      <section id="contact" className="subscription">
        <Container>
          <div className="subscribe-title text-center">
            <h2>Do you want to join Our Restaurant Customer List. </h2>
            <p>
              You Will Get offers from our side and we are very much able to give you valuable Offer.
            </p>
          </div>
          <Row>
            <Col sm={12}>
              <div className="subscription-input-group">
                <Form>
                  <Form.Group>
                    <Form.Control type="email" className="subscription-input-form" placeholder="Enter Your Email Here " />
                  </Form.Group>
                </Form>
                <Button variant='outline-info' className="appsLand-btn">Get Offer</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Add Business End Here  */}

      {/* Footer Start From Here  */}
   <Footer/>
      {/* Footer End From Here  */}

    </>
  )
}

export default Home