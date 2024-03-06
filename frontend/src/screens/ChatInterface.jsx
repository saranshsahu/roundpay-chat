import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import { FaRegPaperPlane } from 'react-icons/fa';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      
      setMessages([...messages, { text: message, sender: 'You' }]);
      
      setMessage('');
    }
  };

  return (
    <div className="chat-interface">
      <ListGroup className="chat-messages">
        {messages.map((msg, index) => (
          <ListGroup.Item key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="chat-input">
        <Form onSubmit={handleSendMessage}>
          <Form.Group className="mb-3" controlId="messageInput">
            <Form.Control
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <FaRegPaperPlane /> Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChatInterface;
