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
  product: Array<{ pk: string }>,
  items: Array<Item>,
  type: String,
};

export default class ProductDetails extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      modal: {
        isOpen: false,
        itemSelected: null,
      },
    };
  }

  onClick = (item) => {
    this.setState(() => ({
      modal: { isOpen: true, itemSelected: item },
    }));
  };

  render() {
    const { product, items, type } = this.props;
    const { modal } = this.state;
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
