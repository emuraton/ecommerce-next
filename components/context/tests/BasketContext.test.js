import { shallow } from 'enzyme';
import { BasketProvider } from '../BasketContext';

describe('BasketContext', () => {
  const item = {
    id: 44,
    image: 'shared-room.jpg',
    name: 'Shared room',
    price: 18,
  };
  describe('addToBasket', () => {
    it('add new item', () => {
      const wrapper = shallow(
        <BasketProvider>
          <div>Im a children</div>
        </BasketProvider>,
      );
      expect(wrapper.instance().state.total).toBe(0);
      wrapper.instance().addToBasket(item);
      const { state } = wrapper.instance();

      expect(state.total).toBe(item.price);
      expect(state.items.length).toBe(1);
      const storedItem = state.items[0];
      expect(storedItem.id).toBe(item.id);
      expect(storedItem.quantity).toBe(1);
    });

    it('add existing item', () => {
      const wrapper = shallow(
        <BasketProvider>
          <div>Im a children</div>
        </BasketProvider>,
      );
      wrapper.setState({
        total: 18,
        items: [{ id: 44, name: 'Shared room', quantity: 1 }],
      });
      wrapper.instance().addToBasket(item);

      const { state } = wrapper.instance();
      expect(state.total).toBe(36);
      expect(state.items.length).toBe(1);
      expect(state.items[0].quantity).toBe(2);
    });
  });

  describe('removeFromBasket', () => {
    it('decrease quantity', () => {
      const wrapper = shallow(
        <BasketProvider>
          <div>Im a children</div>
        </BasketProvider>,
      );
      wrapper.setState({
        total: 36,
        items: [{ id: 44, name: 'Shared room', quantity: 3 }],
      });

      wrapper.instance().removeFromBasket(item);
      const { state } = wrapper.instance();

      expect(state.total).toBe(18);
      expect(state.items.length).toBe(1);
      const storedItem = state.items[0];
      expect(storedItem.id).toBe(item.id);
      expect(storedItem.quantity).toBe(2);
    });

    it('remove item if quantity=1', () => {
      const wrapper = shallow(
        <BasketProvider>
          <div>Im a children</div>
        </BasketProvider>,
      );
      wrapper.setState({
        total: 18,
        items: [{ id: 44, name: 'Shared room', quantity: 1 }],
      });
      wrapper.instance().removeFromBasket(item);

      const { state } = wrapper.instance();
      expect(state.total).toBe(0);
      expect(state.items.length).toBe(0);
    });
  });
});
