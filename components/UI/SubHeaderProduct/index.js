import React from 'react';

import MapMarker from '../SVG//MapMarker';
import AmenitiesRow from '../AmenitiesRow';

import SubHeader from './styles';

const amenities = [
  { name: 'Wifi', slug: 'wifi' },
  { name: 'Bar', slug: 'bar' },
  { name: 'A/C', slug: 'AC' },
  { name: 'Parking', slug: 'parking' },
];

const SubHeaderProduct = ({ product }) => {
  const { name, distance, description } = product;
  return (
    <SubHeader.Wrapper>
      <SubHeader.Title>{name}</SubHeader.Title>
      <SubHeader.MarginWrapper>
        <SubHeader.StarsList nbStars={5} />
        <SubHeader.Container>
          <MapMarker />
          <SubHeader.FestivalName>SEMF</SubHeader.FestivalName>
          <SubHeader.Distance>{distance} away</SubHeader.Distance>
        </SubHeader.Container>
      </SubHeader.MarginWrapper>
      <AmenitiesRow amenities={amenities} />
      <SubHeader.Paragraph>{description}</SubHeader.Paragraph>
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;
