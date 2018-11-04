// @flow
import React from 'react';
import styled from 'styled-components';

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
  price: string,
  previousPrice: string,
  length: number,
  map: any,
};

type Props = {
  items: Item,
  onClick: (event: SyntheticMouseEvent<any>) => {},
};

const ItemList = ({ items, onClick }: Props) => {
  if (!items || items.length === 0) return null;

  return (
    <Section>
      {items.map((item, index) => (
        <HotelCard key={index} item={item} onClick={() => onClick(item)} />
      ))}
    </Section>
  );
};

export default ItemList;
