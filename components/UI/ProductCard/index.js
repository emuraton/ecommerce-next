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
  font-size: 16px;
  font-weight: 800;
  color: rgb(0, 132, 137);
  line-height: 20px;
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

const Dates = styled.p`
  font-weight: 500;
  color: rgb(72, 72, 72);
  margin-top: 5px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const Price = styled.p`
  font-weight: 600;
  color: rgb(72, 72, 72);
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const ProductCard = ({ className, product }) => {
  const { name, date_range: dateRange, price } = product;
  return (
    <div className={className}>
      <Link href="#">
        <Image src="https://via.placeholder.com/350x250" alt="placeholder" />
        <Title>{name}</Title>
        <Dates>{dateRange}</Dates>
        <Price>{price}</Price>
      </Link>
    </div>
  );
};

export default ProductCard;
