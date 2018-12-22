// @flow
import * as React from 'react';

import PlusMinusBasket from '../PlusMinusBasket';
import Ticket from '../SVG/Ticket';
import { BasketConsumer } from '../../context/BasketContext';

import { Card } from './styles';

type Item = {
  name: string,
  displayedPrice: string,
};

type Props = {
  item: Item,
  onClick: (event: SyntheticMouseEvent<any>) => {},
  className?: string,
};

const TicketCard = ({ item }: Props) => {
  if (!item) return null;
  const { name, displayedPrice } = item;
  return (
    <BasketConsumer>
      {({ addToBasket, removeFromBasket }) => (
        <Card.Wrapper>
          <Card.ColumnContainer>
            <Card.Test>
              <Card.TicketDetails>
                <Ticket />
                <Card.H2>{name}</Card.H2>
              </Card.TicketDetails>
              <Card.Price>{displayedPrice}</Card.Price>
            </Card.Test>
            <PlusMinusBasket
              quantity={0}
              addToBasket={() => addToBasket(item)}
              removeFromBasket={() => removeFromBasket(item)}
            />
          </Card.ColumnContainer>
        </Card.Wrapper>
      )}
    </BasketConsumer>
  );
};

TicketCard.defaultProps = {
  className: '',
};

export default TicketCard;
