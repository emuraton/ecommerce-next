import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Category from '../';

describe('<Category />', () => {
  const initialProps = {
    slug: 'ticket',
    name: 'Ticket',
    active: false,
    onClick: Function.prototype,
  };
  describe('@render', () => {
    it('default render', () => {
      const wrapper = shallow(<Category {...initialProps} />);
      const button = wrapper.find('Button');
      expect(button).toHaveStyleRule('color', 'rgb(36,37,41)');
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('check css from active props', () => {
      const props = { ...initialProps, active: true };
      const wrapper = shallow(<Category {...props} />);
      const button = wrapper.find('Button');
      expect(button).toHaveStyleRule('color', 'white');
      expect(button).toHaveStyleRule('background-color', 'rgb(0,195,239)');
    });
  });
});
