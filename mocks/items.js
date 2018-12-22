const hotelItems = [
  {
    id: 44,
    image: 'shared-room.jpg',
    name: 'Shared room',
    highlights: ['Bunk bed in dormitory', 'Private bathroom', 'Flat screen TV'],
    price: 18.89,
    displayedPrice: '$18.89',
    previousPrice: '$22',
  },
  {
    id: 45,
    image: 'single-room.jpg',
    name: 'Single room',
    highlights: ['Single room for one person', 'Private bathroom', 'Flat screen TV'],
    price: 38,
    displayedPrice: '$38',
    previousPrice: '$44',
  },
  {
    id: 46,
    image: 'deluxe-room.jpg',
    name: 'Deluxe Room',
    highlights: [
      '39 squares meters',
      'Free standart WiFi access',
      'Free entry to the Infinity Pool',
    ],
    price: 108,
    displayedPrice: '$108',
    previousPrice: '$132',
  },
];

const ticketItems = [
  {
    id: 57,
    name: 'Second Release Ticket',
    price: 18.89,
    displayedPrice: '$18.89',
    previousPrice: null,
    purchasable: true,
  },
  {
    id: 58,
    name: 'Early Bird Ticket',
    price: 38.0,
    displayedPrice: '$38.00',
    previousPrice: null,
    purchasable: false,
  },
];

const items = {
  ticket: ticketItems,
  hotel: hotelItems,
};

export default items;
