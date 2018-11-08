import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const Wrapper = styled.article`
  position: relative;
  background-color: white;
  border-bottom: 1px solid rgb(226, 227, 230);
  padding: 25px 20px;
  border-top: 1px solid rgb(226, 227, 230);

  ${ifProp(
    'notEmpty',
    css`
      &:before,
      &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        top: -2px;
        left: 0;
        background-color: rgb(196, 1, 114);
        z-index: 2;
      }
    `,
  )};
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const H2 = styled.h2`
  color: rgb(36, 37, 41);
  font-size: 16px;
  line-height: 18px;
  margin: 0 0 0 5px;
`;

const Price = styled.p`
  font-weight: 500;
  color: rgb(36, 37, 41);
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 15px;
  line-height: 18px;
  margin-left: 29px;

  ${ifProp(
    'disabled',
    css`
      font-size: 14px;
      font-weight: 400;
      opacity: 0.5;
      text-decoration: line-through;
    `,
  )};
`;

const TicketDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* border-right: 1px solid rgb(226, 227, 230); */
`;

const Test = styled.div`
  width: 100%;
  /* border-right: 1px solid rgb(226, 227, 230); */
`;

export const Card = {
  Wrapper,
  ColumnContainer,
  H2,
  Price,
  TicketDetails,
  Test,
};
