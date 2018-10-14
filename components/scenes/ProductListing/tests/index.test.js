import { mount } from 'enzyme';

import ProductListing from '../';

describe('<ProductListing />', () => {
  const initialProps = {
    categories: [
      { pk: 1, slug: 'ticket', name: 'Ticket', products: [] },
      { pk: 2, slug: 'hotel', name: 'Hotel', products: [] },
    ],
    productsByCategories: {
      ticket: [
        {
          pk: '12749',
          type: 'ticket',
          name: 'General Admission Ticket',
          date_range: '8-9 December 2018',
          price: '$143.03',
        },
      ],
      hotel: [
        {
          pk: '13045',
          type: 'hotel',
          name: 'A&O Stuttgart City',
          date_range: '7-10 December 2018',
          price: '$18.89',
        },
      ],
    },
  };

  describe('@event handlers', () => {
    it('onClick', () => {
      const wrapper = mount(<ProductListing {...initialProps} />);
      expect(wrapper.state('slideIndex')).toBe(0);

      const categoryButton = wrapper.find('button').at(1);
      categoryButton.simulate('click', {
        currentTarget: { name: 'hotel' },
        preventDefault: Function.prototype,
      });
      expect(wrapper.state('slideIndex')).toBe(1);
    });

    it('onSlide', () => {
      const wrapper = mount(<ProductListing {...initialProps} />);
      expect(wrapper.state('slideIndex')).toBe(0);
      wrapper.instance().onSlide(1);
      expect(wrapper.state('slideIndex')).toBe(1);
    });
  });
});
