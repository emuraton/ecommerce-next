import React from 'react';
import styled from 'styled-components';

import ProductCard from '../ProductCard';

const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledProductCard = styled(ProductCard)`
  display: inline-block;
  margin: 10px 0 10px 0;
`;

const ProductList = () => {
  return (
    <Section>
      {products.map(product => (
        <StyledProductCard key={product.id} />
      ))}
    </Section>
  );
};

export default ProductList;
