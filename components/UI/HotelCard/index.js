// @flow
import * as React from 'react';

import Card from './styles';

type Item = {
  image: string,
  name: string,
  highlights: Array<{ highlight: string }>,
  displayedPrice: string,
  previousPrice: string,
};

type Props = {
  item: Item,
  onClick: (event: SyntheticMouseEvent<any>) => {},
  className?: string,
};

const HotelCard = ({ item, onClick, className }: Props) => {
  if (!item) return null;
  const {
    image, name, highlights, displayedPrice, previousPrice,
  } = item;
  return (
    <Card.Container className={className}>
      <Card.ImageContainer>
        <Card.Image src={`/static/${image}`} />
      </Card.ImageContainer>
      <Card.FlexColumn>
        <Card.H2>{name}</Card.H2>
        <Card.List>
          {highlights.map((highlight, index) => (
            <Card.ListItem key={index}>{highlight}</Card.ListItem>
          ))}
        </Card.List>
        <div>
          <Card.Price>{displayedPrice}</Card.Price>
          <Card.PerNight>per night</Card.PerNight>
        </div>
        <div>
          <Card.Price disabled>{previousPrice}</Card.Price>
          <Card.PerNight disabled>per night</Card.PerNight>
        </div>
        <Card.Button type="button" onClick={onClick}>
          Book Now
        </Card.Button>
      </Card.FlexColumn>
    </Card.Container>
  );
};

HotelCard.defaultProps = {
  className: '',
};

export default HotelCard;
