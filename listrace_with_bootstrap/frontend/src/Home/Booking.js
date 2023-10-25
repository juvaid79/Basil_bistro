import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; // Import Row component
import * as formik from 'formik';
import * as yup from 'yup';
import HomeNavbar from './HomeNavbar';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup
      .string().required('Name is required')
      .min(6, "You Have To Enter Atleast 6 Character Of Your Name")
      .matches(/^[A-Za-z]+$/, 'Name should only contain letters'),
    email: yup
      .string()
      .email('Invalid email address')
      .test('is-gmail', 'Only Gmail addresses are allowed', (value) => {
        return value.endsWith('@gmail.com');
      })
      .required('Email is required'),
    contactNumber: yup
      .string()
      .min(10, 'Phone number must have at least 10 digits')
      .max(12, 'You Can Not Enter More Than 12 Digits')
      .required('Contact Number is required'),
    arrivalDate: yup
      .date()
      .required('Arrival Date is required'),
    // .min(new Date(), 'Departure date cannot be in the past'),
    departureDate: yup
      .date()
      .min(yup.ref('arrivalDate'), 'Departure date cannot be earlier than arrival date')
      .min(new Date(), 'Departure date cannot be in the past')
      .required('Departure Date is required'),
  });


  const handleSubmit = async (data) => {
    console.log("payment running", data)
    navigate('/payment')
  }


  return (
    <>
      <HomeNavbar />
      <hr />
      <div className='Bookingcontainer'>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            // Handle form submission here
            console.log("Your enter value", values);
            handleSubmit(values)
          }}
          initialValues={{
            name: '',
            email: '',
            contactNumber: '',
            arrivalDate: '',
            departureDate: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <h4>Booking Section</h4>
              <Row>
                <Col md="6">
                  <Form.Group controlId="validationFormikName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="validationFormikEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Form.Group controlId="validationFormikContactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="contactNumber"
                      min="0"
                      value={values.contactNumber}
                      onChange={handleChange}
                      isValid={touched.contactNumber && !errors.contactNumber}
                      isInvalid={!!errors.contactNumber}
                    />
                    <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="validationFormikArrivalDate">
                    <Form.Label>Arrival Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="arrivalDate"
                      value={values.arrivalDate}
                      onChange={handleChange}
                      isValid={touched.arrivalDate && !errors.arrivalDate}
                      isInvalid={!!errors.arrivalDate}
                    />
                    <Form.Control.Feedback type="invalid">{errors.arrivalDate}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="validationFormikDepartureDate">
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  name="departureDate"
                  value={values.departureDate}
                  onChange={handleChange}
                  isValid={touched.departureDate && !errors.departureDate}
                  isInvalid={!!errors.departureDate}
                />
                <Form.Control.Feedback type="invalid">{errors.departureDate}</Form.Control.Feedback>
              </Form.Group>
              <Button variant='outline-info' type="submit" className='bookingbtn' >Checkout</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Booking;
