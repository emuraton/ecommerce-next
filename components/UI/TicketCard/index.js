// @flow
import * as React from 'react';

import PlusMinusBasket from '../PlusMinusBasket';
import Ticket from '../SVG/Ticket';
import { Card } from './styles';

type Item = {
  name: string,
  highlights: Array<{ highlight: string }>,
  price: string,
  previousPrice: string,
};

type Props = {
  item: Item,
  onClick: (event: SyntheticMouseEvent<any>) => {},
  className?: string,
};

const TicketCard = ({ item, onClick, className }: Props) => {
  if (!item) return null;
  // const {
  //   name, highlights, price, previousPrice,
  // } = item;
  return (
    <Card.Wrapper className={className}>
      <Card.ColumnContainer>
        <Card.Test>
          <Card.TicketDetails>
            <Ticket />
            <Card.H2>Second Release Ticket</Card.H2>
          </Card.TicketDetails>
          <Card.Price>$123.00</Card.Price>
        </Card.Test>
        <PlusMinusBasket quantity={0} onClick={() => {}} />
      </Card.ColumnContainer>
    </Card.Wrapper>
  );
};

export default TicketCard;
