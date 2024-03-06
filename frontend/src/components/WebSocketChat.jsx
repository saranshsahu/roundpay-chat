
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';



const WebSocketChat = ({ username }) => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const newSocket = new WebSocket('ws://localhost:3000');
  
      newSocket.onopen = () => {
        console.log('WebSocket connection opened');
      };
  
      newSocket.onmessage = (event) => {
        try {
          const newMessage = JSON.parse(event.data);
          setChatMessages((prevMessages) => [...prevMessages, newMessage]);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
  
      newSocket.onclose = () => {
        console.log('WebSocket connection closed');
      };
  

      setSocket(newSocket);
  
      return () => {
        newSocket.close();
      };
    }, []); 
  
    const handleSendMessage = (e) => {
      e.preventDefault(); 
  
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ username, message }));
        setChatMessages((prevMessages) => [...prevMessages, { username, message }]);
        setMessage('');
      } else {
        console.error('WebSocket connection is not open. Unable to send message.');
      }
    };
  
 
  return (
    <div>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <Form>
        <Form.Group controlId="formMessage">
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSendMessage}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default WebSocketChat;
