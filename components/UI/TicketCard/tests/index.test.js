import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TicketCard from '..';

describe('<TicketCard />', () => {
  const initialProps = {
    onClick: Function.prototype,
    item: {
      id: 44,
      image: 'shared-room.jpg',
      name: 'Shared room',
      highlights: ['Bunk bed in dormitory', 'Private bathroom', 'Flat screen TV'],
      price: '$18.89',
      previousPrice: '$22',
    },
  };
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<TicketCard {...initialProps} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
