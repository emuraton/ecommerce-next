import React from 'react';

import { Wifi, Parking, Bar, AC } from '../SVG/Amenities';
import Amenities from './styles';

export const renderAmenity = slug => enumAmenities[slug] || <Wifi />;

const AmenitiesRow = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;
  return (
    <Amenities.Container>
      <Amenities.List>
        {amenities.map((amenity, index) => {
          if (index > 2) return null; // Only display first 3 amenities
          return (
            <Amenities.ListItem key={`amentity-${index}`}>
              <Amenities.Icon>{renderAmenity(amenity.slug)}</Amenities.Icon>
              <Amenities.IconLabel>{amenity.name}</Amenities.IconLabel>
            </Amenities.ListItem>
          );
        })}
      </Amenities.List>
      {amenities.length > 2 && (
        <Amenities.ShowMoreButton type="button" onClick={() => {}}>
          + Show all amenities
        </Amenities.ShowMoreButton>
      )}
    </Amenities.Container>
  );
};

const enumAmenities = {
  wifi: <Wifi />,
  bar: <Bar />,
  AC: <AC />,
  parking: <Parking />,
};

export default AmenitiesRow;
