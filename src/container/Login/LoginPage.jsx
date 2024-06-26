import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
            Sign In
          </Button>
        </Form>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
