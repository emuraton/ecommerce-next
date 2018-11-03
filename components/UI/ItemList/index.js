import React from 'react';
import styled from 'styled-components';

import HotelCard from '../HotelCard';

const Section = styled.section`
  > div:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const ItemList = ({ items, onClick }) => {
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
