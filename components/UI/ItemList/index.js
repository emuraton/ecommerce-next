// @flow
import * as React from 'react';
import styled from 'styled-components';

import TicketCard from '../TicketCard';
import HotelCard from '../HotelCard';

const Section = styled.section`
  > div:not(:last-child) {
    margin-bottom: 30px;
  }
`;

type Item = {
  image: string,
  name: string,
  highlights: Array<{ highlight: string }>,
  price: number,
  displayedPrice: string,
  previousPrice: string,
  length: number,
  map: any,
};

type Props = {
  items: Item,
  type: string,
  onClick: (event: SyntheticMouseEvent<any>) => {},
};

const ItemList = ({ items, onClick, type }: Props) => {
  if (!items || items.length === 0) return null;
  const ItemCard = type === 'ticket' ? TicketCard : HotelCard;
  return (
    <Section>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} onClick={() => onClick(item)} />
      ))}
    </Section>
  );
};

export default ItemList;
