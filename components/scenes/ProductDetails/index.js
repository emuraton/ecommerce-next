import React, { Fragment } from 'react';

import Banner from '../../UI/Banner';
import SubHeaderProduct from '../../UI/SubHeaderProduct';
import ItemList from '../../UI/ItemList';
import Modal from '../../UI/Modal';
import CloseButton from '../../UI/SVG/CloseButton';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: {
        isOpen: false,
        itemSelected: null,
      },
    };
  }

  onClick = item => {
    this.setState(() => ({
      modal: { isOpen: true, itemSelected: item },
    }));
  };

  render() {
    const { product, items } = this.props;
    const { modal } = this.state;
    return (
      <Fragment>
        <Banner product={product} />
        <SubHeaderProduct product={product} />
        <ItemList items={items} onClick={this.onClick} />
        <Modal isOpen={modal.isOpen}>
          <Fragment>
            <div
              onClick={() =>
                this.setState(() => ({
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
