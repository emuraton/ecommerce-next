import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

const Container = styled.section`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 50%;
  margin-right: 20px;
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const List = styled.ul`
  padding-left: 10px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  font-weight: 500;
  color: rgb(72, 72, 72);
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const H2 = styled.h2`
  font-weight: 500;
  margin: 5px 0;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Price = styled.span`
  font-size: 22px;
  font-weight: 600;
  ${ifProp(
    'disabled',
    css`
      font-size: 20px;
      font-weight: 600;
      opacity: 0.5;
      text-decoration: line-through;
    `,
  )};
`;

const PerNight = styled.span`
  margin-left: 3px;
  font-size: 12px;

  ${ifProp(
    'disabled',
    css`
      opacity: 0.5;
      text-decoration: line-through;
    `,
  )};
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: 9px;
  left: -5px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: rgb(0, 132, 137);
  color: white;
  border-radius: 3px;
  outline: none;
  border-color: transparent;
  font-size: 18px;
`;
SubmitButton.displayName = 'Button';

const Card = {
  Button: SubmitButton,
  Price,
  PerNight,
  FlexColumn,
  H2,
  List,
  ListItem,
  Container,
  Image,
  ImageContainer,
};

export default Card;
