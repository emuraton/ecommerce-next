import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import ProductCard from '../ProductCard';

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

const ProductList = ({ productsByCategories, slideIndex }) => {
  const productGroups = Object.values(productsByCategories);
  return (
    <Carousel wrapAround swiping withoutControls slideIndex={slideIndex}>
      {productGroups &&
        productGroups.map((group, index) => (
          <div key={index}>
            {group.map(product => (
              <StyledProductCard key={product.pk} product={product} />
            ))}
          </div>
        ))}
    </Carousel>
  );
};

export default ProductList;
