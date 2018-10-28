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
          <SubHeader.LinkMap
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.google.com/maps/dir/?api=1&destination=48.693397,9.187617&origin=48.793102,9.191008"
          >
            <MapMarker />
            <SubHeader.FestivalName>SEMF</SubHeader.FestivalName>
            <SubHeader.Distance>{distance} away</SubHeader.Distance>
          </SubHeader.LinkMap>
        </SubHeader.Container>
      </SubHeader.MarginWrapper>
      <UglyMap
        src="/static/staticmap.jpg"
        link="https://www.google.com/maps/dir/?api=1&destination=48.693397,9.187617&origin=48.793102,9.191008"
      />
      <AmenitiesRow amenities={amenities} />
      <SubHeader.Paragraph>{description}</SubHeader.Paragraph>
    </SubHeader.Wrapper>
  );
};

export default SubHeaderProduct;
