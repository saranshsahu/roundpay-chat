import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ConnectedUsersList = ({ users }) => {
  return (
    <ListGroup>
      <ListGroup.Item variant="info">Connected Users:</ListGroup.Item>
      {users.map((user, index) => (
        <ListGroup.Item key={index}>{user}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ConnectedUsersList;
