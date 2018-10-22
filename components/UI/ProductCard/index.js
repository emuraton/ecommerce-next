import React from 'react';
import Link from 'next/link';
import { Card, StaffPick } from './styles';

const ProductCard = ({ className, product }) => {
  const { name, date_range: dateRange, price, image, staffPicked } = product;
  return (
    <div className={className}>
      <Link href="/product">
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

export default ProductCard;
