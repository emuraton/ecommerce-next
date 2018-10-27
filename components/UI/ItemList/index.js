import React from 'react';
import styled from 'styled-components';

import ItemCard from '../ItemCard';

const Section = styled.section`
  > div:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const ItemList = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <Section>
      {items.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </Section>
  );
};

export default ItemList;