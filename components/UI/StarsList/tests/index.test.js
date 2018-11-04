import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import StarsList from '..';

describe('<StarsList />', () => {
  describe('@renders', () => {
    it('default render', () => {
      const wrapper = shallow(<StarsList />);
      expect(toJson(wrapper)).toBe('');
    });

    it('5 stars', () => {
      const props = { nbStars: 5 };
      const wrapper = shallow(<StarsList {...props} />);
      const stars = wrapper.find('Stars');
      expect(stars).toHaveLength(5);
    });

    it('color=red', () => {
      const props = { nbStars: 2, color: 'red' };
      const wrapper = mount(<StarsList {...props} />);
      const star = wrapper.find('Stars').first();
      expect(star).toHaveStyleRule('fill', 'red');
    });
  });
});
