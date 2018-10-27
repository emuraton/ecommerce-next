import React from 'react';

import MapMarker from '../SVG//MapMarker';
import AmenitiesRow from '../AmenitiesRow';
import UglyMap from '../UglyMap';

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
      <UglyMap src="https://maps.googleapis.com/maps/api/staticmap?size=4000x100&zoom=14&center=48.79307,9.1888013&scale=1&markers=icon:https://festicket.com/static/img/google-maps/indoor.png|48.793102,9.191008" />
      <AmenitiesRow amenities={amenities} />
      <SubHeader.Paragraph>{description}</SubHeader.Paragraph>
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;
