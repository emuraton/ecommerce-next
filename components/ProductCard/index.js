import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  outline: none;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-bottom: 7px;
`;

const Title = styled.h2`
  font-size: 14px;
  line-height: 20px;
  color: rgb(165, 41, 3);
  font-weight: 400;
  margin: 3px;
  text-transform: uppercase;
`;

const Dates = styled.p`
  font-weight: 400;
  color: rgb(78, 17, 36);
  margin: 3px;
  font-size: 14px;
  line-height: 18px;
`;

const Price = styled.p`
  font-size: 18px;
  line-height: 18px;
  color: rgb(36, 37, 41);
  margin: 3px;
`;

const ProductCard = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Link href="#">
        <Image src="https://via.placeholder.com/350x250" alt="placeholder" />
        <Title>3 Days Pass + Pool Party</Title>
        <Dates>12-14 October 2018</Dates>
        <Price>$143.03</Price>
      </Link>
    </div>
  );
};

export default ProductCard;
