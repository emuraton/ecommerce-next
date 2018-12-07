// @flow
import * as React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import PlusIcon from '../SVG/PlusIcon';
import MinusIcon from '../SVG/MinusIcon';

const TicketAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  font-size: 0;
  background-color: white;
  transition: transform 0.2s;
  outline: 0;
  opacity: ${ifProp('isDisabled', 0.2, 1)};

  &:active {
    transform: scale(0.95);
  }
`;
Button.displayName = 'Button';

const Quantity = styled.span`
  margin: 0 25px;
  margin-top: 5px;
  color: rgb(0, 132, 137);
  opacity: ${ifProp('isDisabled', 0.2, 1)};
  font-size: 26px;
`;
Quantity.displayName = 'Quantity';

const StyledPlusIcon = styled(PlusIcon)`
  height: 30px;
  width: 30px;
  fill: rgb(0, 132, 137);
`;

const StyledMinusIcon = styled(MinusIcon)`
  height: 30px;
  width: 30px;
  fill: rgb(0, 132, 137);
`;

type Props = {
  onClick: (event: SyntheticMouseEvent<any>) => {},
  quantity: number,
};

const PlusMinusBasket = ({ onClick, quantity }: Props) => (
  <TicketAction>
    <Button element="button" onClick={onClick} isDisabled={quantity === 6}>
      <StyledPlusIcon />
    </Button>
    <Quantity isDisabled={quantity === 0}>{quantity}</Quantity>
    <Button element="button" onClick={onClick} isDisabled={quantity === 0}>
      <StyledMinusIcon />
    </Button>
  </TicketAction>
);

export default PlusMinusBasket;
