import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CategoryMenu from '../';

describe('<CategoryMenu />', () => {
  const initialProps = {
    categories: [
      { pk: 1, slug: 'ticket', name: 'Ticket', products: [] },
      { pk: 2, slug: 'hotel', name: 'Hotel', products: [] },
    ],
  };
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<CategoryMenu {...initialProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('@event handlers', () => {
    it('onClick', () => {
      const mockEvent = {
        currentTarget: { name: 'hotel' },
        preventDefault: Function.prototype,
      };
      const wrapper = shallow(<CategoryMenu {...initialProps} />);

      expect(wrapper.state('activeSlug')).toBe('ticket');
      wrapper.instance().onClick(mockEvent);
      expect(wrapper.state('activeSlug')).toBe('hotel');
    });
  });
});
