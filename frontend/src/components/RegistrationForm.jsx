import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
   
    onRegister(username);
  };

  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={handleRegister}>
        Register
      </Button>
    </Form>
  );
};

export default RegistrationForm;
