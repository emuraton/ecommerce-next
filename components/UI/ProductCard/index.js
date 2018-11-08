// @flow
import React from 'react';
import Link from 'next/link';
import { Card, StaffPick } from './styles';

type Props = {
  className?: string,
  product: {
    date_range: string,
    name: string,
    price: string,
    image: string,
    staffPicked: boolean,
    type: string,
  },
};

const ProductCard = ({ className, product }: Props) => {
  const {
    name, date_range: dateRange, price, image, staffPicked, type,
  } = product;
  const productLink = { pathname: 'product', query: { type } };
  return (
    <div className={className}>
      <Link href={productLink}>
        <Card.Anchor>
          {staffPicked && (
            <StaffPick.Container>
              <StaffPick.Label>
                <span>staff pick</span>
              </StaffPick.Label>
            </StaffPick.Container>
          )}
          <Card.Image src={`/static/${image}`} alt="placeholder" />
          <Card.Title>{name}</Card.Title>
          <Card.Dates>{dateRange}</Card.Dates>
          <Card.Price>{price}</Card.Price>
        </Card.Anchor>
      </Link>
    </div>
  );
};

ProductCard.defaultProps = {
  className: '',
};

export default ProductCard;
