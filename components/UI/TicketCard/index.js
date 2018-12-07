// @flow
import * as React from 'react';

import PlusMinusBasket from '../PlusMinusBasket';
import Ticket from '../SVG/Ticket';
import { Card } from './styles';

type Item = {
  name: string,
  price: string,
};

type Props = {
  item: Item,
  onClick: (event: SyntheticMouseEvent<any>) => {},
  className?: string,
};

const TicketCard = ({ item, onClick, className }: Props) => {
  if (!item) return null;
  const { name, price } = item;
  return (
    <Card.Wrapper className={className}>
      <Card.ColumnContainer>
        <Card.Test>
          <Card.TicketDetails>
            <Ticket />
            <Card.H2>{name}</Card.H2>
          </Card.TicketDetails>
          <Card.Price>{price}</Card.Price>
        </Card.Test>
        <PlusMinusBasket quantity={0} onClick={onClick} />
      </Card.ColumnContainer>
    </Card.Wrapper>
  );
};

TicketCard.defaultProps = {
  className: null,
};

export default TicketCard;
