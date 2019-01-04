// @flow
import * as React from 'react';

const { Provider, Consumer } = React.createContext({
  addToBasket: Function.prototype,
  removeFromBasket: Function.prototype,
  basket: {},
});

type Props = {
  children: React.Node,
};

type State = {
  total: number,
  items: Array<any>,
};

class BasketProvider extends React.Component<Props, State> {
  state = {
    total: 0,
    items: [],
  };

  getItemIndexFromBasket = (itemId: number) => {
    const { items } = this.state;
    return items.findIndex(item => item.id === itemId);
  };

  addToBasket = (item: any) => {
    const { items, total } = this.state;
    const { id, name, price } = item;
    const indexFoundItem = this.getItemIndexFromBasket(id);
    // TODO refactor using an immutable lib
    if (indexFoundItem !== -1) {
      // Update quantity of an item already inside the basket
      const foundItem = items[indexFoundItem];
      const newItem = { ...foundItem, quantity: foundItem.quantity + 1 };
      items.splice(indexFoundItem - 1, 1);

      items.push(newItem);
    } else {
      // Add new item in the basket
      items.push({ id, name, quantity: 1 });
    }

    const newTotal = total + price;
    this.setState(() => ({
      items,
      total: newTotal,
    }));
  };

  removeFromBasket = (item: any) => {
    const { id, price } = item;
    const { items, total } = this.state;
    const indexFoundItem = this.getItemIndexFromBasket(id);
    if (indexFoundItem === -1) return;

    const foundItem = items[indexFoundItem];
    // TODO refactor using an immutable lib
    // remove item
    items.splice(indexFoundItem - 1, 1);
    // update item if necessary
    if (foundItem.quantity !== 1) {
      const newItem = { ...foundItem, quantity: foundItem.quantity - 1 };
      items.push(newItem);
    }

    const newTotal = total - price;
    const newItems = items;
    this.setState(() => ({
      items: newItems,
      total: newTotal,
    }));
  };

  render() {
    const { children } = this.props;
    return (
      <Provider
        value={{
          basket: this.state,
          addToBasket: this.addToBasket,
          removeFromBasket: this.removeFromBasket,
        }}
      >
        <React.Fragment>{children}</React.Fragment>
      </Provider>
    );
  }
}

export { BasketProvider, Consumer as BasketConsumer };
