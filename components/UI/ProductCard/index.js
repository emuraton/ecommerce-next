import React from 'react';
import { Card, StaffPick } from './styles';

const ProductCard = ({ className, product }) => {
  const { name, date_range: dateRange, price, image, staffPicked } = product;
  return (
    <div className={className}>
      <Card.Link href="#">
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
      </Card.Link>
    </div>
  );
};

export default ProductCard;
