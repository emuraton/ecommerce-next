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

const H2 = styled.h2`
  font-size: 18px;
  line-height: 22px;
  color: rgb(72, 72, 72);
  font-weight: 800;
  line-height: 22px;
  margin: 3px;
`;

const Dates = styled.p`
  font-weight: 400;
  color: rgb(36, 37, 41);
  margin: 3px;
  font-size: 14px;
  line-height: 18px;
`;

  const ProductCard = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Link href="">
        <Image src="https://via.placeholder.com/350x250" alt="placeholder" />
        <H2>3 Days Pass + Pool Party</H2>
        <Dates>12-14 October 2018</Dates>
        <Dates>$143.03</Dates>
      </Link>
    </div>
  );
};

export default ProductCard;
