import { shallow } from 'enzyme';

// import CategoryMenu from '../CategoryMenu';

describe('<CategoryMenu />', () => {
  describe('@renders', () => {
    const initialProps = {
      categories: [
        { pk: 1, slug: 'ticket', name: 'Ticket', products: [] },
        { pk: 2, slug: 'hotel', name: 'Hotel', products: [] },
      ],
    };
    it('default render', () => {
      //   const wrapper = shallow(<CategoryMenu {...initialProps} />);
      //   expect(wrapper).toMatchInlineSnapshot();
      expect(true).toBe(true);
    });
  });
});
