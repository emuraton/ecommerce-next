import React from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

import ProductListCard from '../ProductListCard';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledProductListCard = styled(ProductListCard)`
  display: inline-block;
  margin: 10px 0 15px 0;
`;

const ProductListMobile = ({ productsByCategories, slideIndex, onSlide }) => {
  if (!productsByCategories) return <p>Error: No products found!</p>;

  const productGroups = Object.values(productsByCategories);
  return (
    <Carousel
      wrapAround
      swiping
      withoutControls
      heightMode="current"
      slideIndex={slideIndex}
      afterSlide={slideIndex => onSlide(slideIndex)}
    >
      {productGroups.map((group, index) => (
        <div key={index}>
          {group.map(product => (
            <StyledProductListCard key={product.pk} product={product} />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default ProductListMobile;
