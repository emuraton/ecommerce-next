import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ItemCard from '../';

describe('<ItemCard />', () => {
  const initialProps = {
    onClick: Function.prototype,
  };
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<ItemCard {...initialProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('@events', () => {
    // TODO refactor test once onClick actually do something
    it('onClick', () => {
      const mockedOnClick = jest.fn();
      const props = {
        ...initialProps,
        onClick: mockedOnClick,
      };
      const wrapper = shallow(<ItemCard {...props} />);
      const button = wrapper.find('Button');
      expect(mockedOnClick).toHaveBeenCalledTimes(0);
      button.simulate('click');
      expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
