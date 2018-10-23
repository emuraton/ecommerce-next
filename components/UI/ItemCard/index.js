import React from 'react';

import Card from './styles';

const ItemCard = ({ onClick }) => {
  return (
    <Card.Container>
      <Card.ImageContainer>
        <Card.Image src="/static/deluxe-room.jpg" />
      </Card.ImageContainer>
      <Card.FlexColumn>
        <Card.H2>Deluxe Room</Card.H2>
        <Card.List>
          <Card.ListItem>39 squares meters</Card.ListItem>
          <Card.ListItem>Free standart WiFi access</Card.ListItem>
          <Card.ListItem>Free entry to the Infinity Pool</Card.ListItem>
        </Card.List>
        <div>
          <Card.Price>$108</Card.Price>
          <Card.PerNight>per night</Card.PerNight>
        </div>
        <div>
          <Card.Price disabled>$158</Card.Price>
          <Card.PerNight disabled>per night</Card.PerNight>
        </div>
        <Card.Button type="button" onClick={onClick}>
          Book Now
        </Card.Button>
      </Card.FlexColumn>
    </Card.Container>
  );
};

export default ItemCard;
