import React from 'react';
import styled from 'styled-components';

import { Wifi, Parking, Bar, AC } from '../SVG/Amenities';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  position: relative;
  color: #37454d;
  overflow: visible;
  text-align: center;
  width: 33%;
  /* height: 52px; */
  float: left;
  text-align: left;
  /* padding-right: 16px; */
`;
ListItem.displayName = 'ListItem';

const Icon = styled.span`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 12px 0 0;
`;

const IconLabel = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  font-weight: 500;
  color: rgb(72, 72, 72);
  font-size: 16px;
  line-height: 25px;
`;

const Container = styled.div`
  margin-top: 10px;
  border-top: 1px solid rgb(235, 235, 235);
`;

const ShowMoreButton = styled.button`
  background: transparent;
  color: rgb(0, 132, 137);
  border: none;
  text-decoration: none;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;
ShowMoreButton.displayName = 'ShowMoreButton';

export const renderAmenity = slug => enumAmenities[slug] || <Wifi />;

const AmenitiesRow = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;
  return (
    <Container>
      <List>
        {amenities.map((amenity, index) => {
          if (index > 2) return null; // Only display first 3 amenities
          return (
            <ListItem key={`amentity-${index}`}>
              <Icon>{renderAmenity(amenity.slug)}</Icon>
              <IconLabel>{amenity.name}</IconLabel>
            </ListItem>
          );
        })}
      </List>
      {amenities.length > 2 && (
        <ShowMoreButton type="button" onClick={() => {}}>
          + Show all amenities
        </ShowMoreButton>
      )}
    </Container>
  );
};

const enumAmenities = {
  wifi: <Wifi />,
  bar: <Bar />,
  AC: <AC />,
  parking: <Parking />,
};

export default AmenitiesRow;
