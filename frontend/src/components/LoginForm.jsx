import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ onLogin }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

  const handleSendMessage = () => {
    
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleLogin = () => {
    
    onLogin(username);
  };

  return (
    <Form onSubmit={handleSendMessage}>
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

      <Button variant="primary" type="button" onClick={handleLogin}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
