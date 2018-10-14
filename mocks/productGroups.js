const ticketProducts = [
  {
    pk: '12749',
    type: 'ticket',
    name: 'General Admission Ticket',
    date_range: '8-9 December 2018',
    price: '$143.03',
  },
  {
    pk: '13040',
    type: 'ticket',
    name: 'VIP Ticket',
    date_range: '8-9 December 2018',
    price: '$200.03',
  },
  {
    pk: '13040',
    type: 'ticket',
    name: 'Ticket',
    date_range: '8-9 December 2018',
    price: '$800.67',
  },
];

const hotelProducts = [
  {
    pk: '13045',
    type: 'hotel',
    name: 'A&O Stuttgart City',
    date_range: '7-10 December 2018',
    price: '$18.89',
  },
  {
    pk: '13040',
    type: 'hotel',
    name: 'Best Western Plaza Hotel Stuttgart',
    date_range: '8-9 December 2018',
    price: '$82.67',
  },
  {
    pk: '13040',
    type: 'hotel',
    name: 'NH Stuttgart Airport',
    date_range: '8-9 December 2018',
    price: '$87.67',
  },
];

const shuttleProducts = [
  {
    pk: '13048',
    type: 'shuttle',
    name: 'One-Way Shuttle Bus Transfer',
    date_range: '21 October 2018',
    price: '$11.8',
  },
  {
    pk: '12240',
    type: 'shuttle',
    name: 'Belgium Arlon Return Trip',
    date_range: '21 October 2018',
    price: '$81.39',
  },
];

const product_groups = [
  { pk: 1, slug: 'ticket', name: 'Ticket', products: ticketProducts },
  { pk: 2, slug: 'hotel', name: 'Hotel', products: hotelProducts },
  { pk: 3, slug: 'shuttle', name: 'Shuttle', products: shuttleProducts },
];

export default product_groups;
