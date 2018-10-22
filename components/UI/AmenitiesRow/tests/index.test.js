import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AmenitiesRow from '..';

describe('<AmenitiesRow />', () => {
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<AmenitiesRow />);
      expect(toJson(wrapper)).toBe('');
    });

    it('with 3 amenities', () => {
      const amenities = [
        { name: 'Wifi', slug: 'wifi' },
        { name: 'Bar', slug: 'bar' },
        { name: 'A/C', slug: 'AC' },
      ];
      const wrapper = shallow(<AmenitiesRow amenities={amenities} />);
      const listItem = wrapper.find('ListItem');

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(listItem).toHaveLength(3);
    });

    it('with more than 3 amenities', () => {
      const amenities = [
        { name: 'Wifi', slug: 'wifi' },
        { name: 'Bar', slug: 'bar' },
        { name: 'A/C', slug: 'AC' },
        { name: 'Parking', slug: 'parking' },
      ];
      const wrapper = shallow(<AmenitiesRow amenities={amenities} />);

      const listItem = wrapper.find('ListItem');
      expect(listItem).toHaveLength(3);
      const showMoreButton = wrapper.find('ShowMoreButton');
      expect(toJson(showMoreButton)).toMatchSnapshot();
    });
  });
});
