import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HotelCard from '../';

describe('<HotelCard />', () => {
  const initialProps = {
    onClick: Function.prototype,
    item: {
      id: 44,
      image: 'shared-room.jpg',
      name: 'Shared room',
      highlights: [
        'Bunk bed in dormitory',
        'Private bathroom',
        'Flat screen TV',
      ],
      price: '$18.89',
      previousPrice: '$22',
    },
  };
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<HotelCard {...initialProps} />);
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
      const wrapper = shallow(<HotelCard {...props} />);
      const button = wrapper.find('Button');
      expect(mockedOnClick).toHaveBeenCalledTimes(0);
      button.simulate('click');
      expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
