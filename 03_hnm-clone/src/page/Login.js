import { useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const loginUser = event => {
    console.log('on submit');
    event.preventDefault();
    setAuthenticate(true);
  };

  return (
    <div style={{ height: 900 }}>
      <Container style={{ width: 500, marginTop: 70 }}>
        <Form onSubmit={event => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
