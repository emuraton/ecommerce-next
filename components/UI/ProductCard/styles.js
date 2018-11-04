import styled from 'styled-components';

const Anchor = styled.a`
  outline: none;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-bottom: 7px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 800;
  color: rgb(0, 132, 137);
  line-height: 20px;
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

const Dates = styled.p`
  font-weight: 500;
  color: rgb(72, 72, 72);
  margin-top: 5px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const Price = styled.p`
  font-weight: 600;
  color: rgb(72, 72, 72);
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const StaffPickContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 25px;
  right: 80px;
  white-space: nowrap;
  z-index: 2;
  height: 32px;
`;

const StaffPickLabel = styled.div`
  float: left;
  margin-right: 8px;
  margin-bottom: 4px;
  max-width: 140px;
  text-overflow: ellipsis;
  padding: 5px 8px 4px 8px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;

  > span {
    color: rgb(72, 72, 72);
    font-weight: 600;
    text-transform: uppercase;
    line-height: 18px;
    font-size: 13px;
  }
`;

export const Card = {
  Anchor,
  Image,
  Title,
  Dates,
  Price,
};

export const StaffPick = {
  Container: StaffPickContainer,
  Label: StaffPickLabel,
};
