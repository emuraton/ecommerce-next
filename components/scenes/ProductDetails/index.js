import React, { Fragment } from 'react';

import Banner from '../../UI/Banner';
import SubHeaderProduct from '../../UI/SubHeaderProduct';
import ItemList from '../../UI/ItemList';
import Modal from '../../UI/Modal';
import CloseButton from '../../UI/SVG/CloseButton';

type Item = {
  image: string,
  name: string,
  highlights: Array<{ highlight: string }>,
  price: string,
  previousPrice: string,
  length: number,
  map: any,
};

type Props = {
  productGroups: Array<{ pk: string }>,
  items: Array<Item>,
};

export default class ProductDetails extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      modal: {
        isOpen: false,
        itemSelected: null,
      },
      product: [],
      items: [],
      type: null,
    };
  }

  // TODO refactor later
  componentDidMount() {
    const { productGroups, items } = this.props;
    const type = this.getProductType();
    const productGroup = type === 'ticket' ? productGroups[0] : productGroups[1];
    const product = productGroup.products[0];
    const typedItems = items[type];
    this.setState(() => ({ product, items: typedItems, type }));
  }

  getProductType() {
    const query = window ? window.location.search.split('=') : null;
    const type = query && query.length > 1 ? query[1] : 'ticket';
    return type;
  }

  onClick = (item) => {
    this.setState(() => ({
      modal: { isOpen: true, itemSelected: item },
    }));
  };

  render() {
    const {
      modal, product, items, type,
    } = this.state;
    if (items && items.length === 0) return null;

    return (
      <Fragment>
        <Banner product={product} />
        <SubHeaderProduct product={product} />
        <ItemList items={items} type={type} onClick={this.onClick} />
        <Modal isOpen={modal.isOpen}>
          <Fragment>
            <div
              role="button"
              tabIndex="0"
              onClick={() => this.setState(() => ({
                modal: { isOpen: false, itemSelected: null },
              }))
              }
            >
              <CloseButton />
            </div>
            {modal.itemSelected && `Item selected: ${modal.itemSelected.name}`}
          </Fragment>
        </Modal>
      </Fragment>
    );
  }
}
