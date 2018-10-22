import React from 'react';
import styled from 'styled-components';

import MapMarker from '../SVG//MapMarker';
import AmenitiesRow from '../AmenitiesRow';

import SubHeader from './styles';

const amenities = [
  { name: 'Wifi', slug: 'wifi' },
  { name: 'Bar', slug: 'bar' },
  { name: 'A/C', slug: 'AC' },
  { name: 'Parking', slug: 'parking' },
];

const MarginWrapper = styled.div`
  margin-top: 10px 0;
  margin-bottom: 20px;
`;

const SubHeaderProduct = ({ product }) => {
  const { name, distance } = product;
  return (
    <SubHeader.Wrapper>
      <SubHeader.Title>{name}</SubHeader.Title>
      <MarginWrapper>
        <SubHeader.StarsList nbStars={5} />
        <SubHeader.Container>
          <MapMarker />
          <SubHeader.FestivalName>SEMF</SubHeader.FestivalName>
          <SubHeader.Distance>{distance} away</SubHeader.Distance>
        </SubHeader.Container>
      </MarginWrapper>
      <AmenitiesRow amenities={amenities} />
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;
