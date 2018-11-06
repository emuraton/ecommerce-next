import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import PlusMinusBasket from '..';

describe('<PlusMinusBasket />', () => {
  describe('@renders', () => {
    const initialProps = {
      onClick: Function.prototype,
      quantity: 0,
    };

    it('default render', () => {
      const wrapper = shallow(<PlusMinusBasket {...initialProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();

      const buttons = wrapper.find('Button');
      expect(buttons.at(0)).toHaveStyleRule('opacity', '1');
      expect(buttons.at(1)).toHaveStyleRule('opacity', '0.2');

      const quantity = wrapper.find('Quantity');
      expect(quantity).toHaveStyleRule('opacity', '0.2');
    });

    it('with quantity > 0', () => {
      const props = {
        ...initialProps,
        quantity: 1,
      };
      const wrapper = shallow(<PlusMinusBasket {...props} />);
      expect(toJson(wrapper)).toMatchSnapshot();

      const buttons = wrapper.find('Button');
      expect(buttons.at(0)).toHaveStyleRule('opacity', '1');
      expect(buttons.at(1)).toHaveStyleRule('opacity', '1');

      const quantity = wrapper.find('Quantity');
      expect(quantity).toHaveStyleRule('opacity', '1');
    });
  });
});
