import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CategoryMenu from '../';

describe('<CategoryMenu />', () => {
  const initialProps = {
    categories: [
      { pk: 1, slug: 'ticket', name: 'Ticket', products: [] },
      { pk: 2, slug: 'hotel', name: 'Hotel', products: [] },
    ],
    slideIndex: 1,
    onClick: Function.prototype,
  };
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<CategoryMenu {...initialProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('no categories, no display', () => {
      const props = { ...initialProps, categories: null };
      const wrapper = shallow(<CategoryMenu {...props} />);
      expect(toJson(wrapper)).toBe('');
    });
  });
});
