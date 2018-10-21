import React from 'react';
import styled, { css } from 'styled-components';

import MapMarker from '../MapMarker';
import StarsList from '../StarsList';

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: rgb(0, 132, 137);
  margin-top: 0px;
  margin-bottom: 5px;
`;

// const Container = styled.div`
//   padding-top: 20px;
//   padding-bottom: 10px;
// `;

const Distance = styled.span`
  font-weight: 500;
  color: rgb(72, 72, 72);
  margin-top: 5px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const FestivalName = styled.span`
  font-weight: 600;
  color: rgb(72, 72, 72);
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const Container = styled.div`
  display: inline-block;
`;

const Wrapper = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledStarsList = styled(StarsList)`
  margin-right: 15px;
`;

const SubHeaderProduct = ({ product }) => {
  const { name, distance } = product;
  return (
    <Wrapper>
      <Title>{name}</Title>
      <StyledStarsList nbStars={5} />
      <Container>
        <MapMarker />
        <FestivalName>SEMF</FestivalName>
        <Distance>{distance} away</Distance>
      </Container>
    </Wrapper>
  );
};

export default SubHeaderProduct;
