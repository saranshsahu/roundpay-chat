import React, { useState } from 'react';

import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ConnectedUsersList from './components/ConnectedUsersList';
import WebSocketChat from './components/WebSocketChat';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    
    setLoggedInUser(username);
  };

  const handleRegister = (username) => {
    
    setLoggedInUser(username);
  };

  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Welcome</h1>
          <Row>
            <Col md={6}>
              {!loggedInUser ? (
                <>
                  <LoginForm onLogin={handleLogin} />
                  <hr />
                  <RegistrationForm onRegister={handleRegister} />
                </>
              ) : (
                <>
                  <ConnectedUsersList users={['User1', 'User2', 'User3']} />
                  <hr />
                  <WebSocketChat username={loggedInUser} />
                </>
              )}
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
};

export default App;
