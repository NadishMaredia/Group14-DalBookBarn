import React, { Component, useState } from 'react';
import Header1 from '../Header1/Header';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Checkout = () => {

    const history = useHistory();
    
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const goToBooks = () => {
        window.location.href = "/Books"
    }

    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('address', address)
        localStorage.setItem('city', city)
        localStorage.setItem('country', country)
        history.push("/PlaceOrders");
    };

    return (
        <div className="">
                <Header1/>
                <div class="jumbotron">
                    <h1 class="display-4">Shipping Screen</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type='text' placeholder='Enter Address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control type='text' placeholder='Enter City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)} required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='country'>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type='text' placeholder='Enter Country'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)} required>
                            </Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='primary'>Continue</Button>
                    </Form>
                    <hr class="my-4"/>
                    <p>Explore what we have !</p>
                    <button className="btn btn-info" onClick={goToBooks}>Go to Books</button>
                </div>
            </div>
    )
}

export default Checkout