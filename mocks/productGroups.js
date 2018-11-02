const ticketProducts = [
  {
    pk: '12749',
    type: 'ticket',
    name: 'General Admission',
    date_range: '8-9 December 2018',
    price: '$143.03',
    image: 'semf-cover.jpg',
    staffPicked: true,
    description:
      'Standard access between the times displayed. Please note this is an 18+ event - ID Required.',
    address: 'Messepiazza 1 70629 Stuttgart, Germany',
  },
  {
    pk: '12750',
    type: 'ticket',
    name: 'VIP Ticket',
    date_range: '8-9 December 2018',
    price: '$200.03',
    image: 'semf-cover.jpg',
    staffPicked: false,
    address: 'Messepiazza 1 70629 Stuttgart, Germany',
  },
  {
    pk: '12751',
    type: 'ticket',
    name: 'Ticket',
    date_range: '8-9 December 2018',
    price: '$800.67',
    image: 'semf-cover.jpg',
    staffPicked: false,
    address: 'Messepiazza 1 70629 Stuttgart, Germany',
  },
];

const hotelProducts = [
  {
    pk: '13045',
    type: 'hotel',
    name: 'A&O Stuttgart City',
    date_range: '7-10 December 2018',
    price: '$18.89',
    image: 'freehand-los-angeles.jpg',
    distance: '1.9 km',
    staffPicked: true,
    description:
      'A&O Stuttgart City is located close to the main train station (6 minutes by tube).The city centre with its many attractions is just a short walk away.The A& O Stuttgart City features 230 brand new rooms(opened summer 2015).There is a games room on site and guests can enjoy the on - site snack bar.The property features a 24 - hour front desk.',
  },
  {
    pk: '13046',
    type: 'hotel',
    name: 'Best Western Plaza Hotel Stuttgart',
    date_range: '8-9 December 2018',
    price: '$82.67',
    image: 'freehand-los-angeles.jpg',
    distance: '12.9 km',
    staffPicked: false,
    description:
      'A&O Stuttgart City is located close to the main train station (6 minutes by tube).The city centre with its many attractions is just a short walk away.The A& O Stuttgart City features 230 brand new rooms(opened summer 2015).There is a games room on site and guests can enjoy the on - site snack bar.The property features a 24 - hour front desk.',
  },
  {
    pk: '13047',
    type: 'hotel',
    name: 'NH Stuttgart Airport',
    date_range: '8-9 December 2018',
    price: '$87.67',
    image: 'freehand-los-angeles.jpg',
    distance: '1.9 km',
    staffPicked: false,
    description:
      'A&O Stuttgart City is located close to the main train station (6 minutes by tube).The city centre with its many attractions is just a short walk away.The A& O Stuttgart City features 230 brand new rooms(opened summer 2015).There is a games room on site and guests can enjoy the on - site snack bar.The property features a 24 - hour front desk.',
  },
];

const shuttleProducts = [
  {
    pk: '12240',
    type: 'shuttle',
    name: 'One-Way Shuttle Bus Transfer',
    date_range: '21 October 2018',
    price: '$11.8',
    image: 'bus-la.jpg',
    staffPicked: true,
  },
  {
    pk: '12241',
    type: 'shuttle',
    name: 'Belgium Arlon Return Trip',
    date_range: '21 October 2018',
    price: '$81.39',
    image: 'bus-la.jpg',
    staffPicked: false,
  },
];

const product_groups = [
  { pk: 1, slug: 'ticket', name: 'Ticket', products: ticketProducts },
  { pk: 2, slug: 'hotel', name: 'Hotel', products: hotelProducts },
  { pk: 3, slug: 'shuttle', name: 'Shuttle', products: shuttleProducts },
];

export default product_groups;
