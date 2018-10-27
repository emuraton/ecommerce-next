import React, { Fragment } from 'react';

import Head from '../components/Head';
import Header from '../components/UI/Header';
import Banner from '../components/UI/Banner';
import SubHeaderProduct from '../components/UI/SubHeaderProduct';
import ItemList from '../components/UI/ItemList';


import productGroups from '../mocks/productGroups';
import { hotelItems } from '../mocks/items';

import '../global-styles.css';

export default class extends React.Component {
  static async getInitialProps() {
    const product = productGroups[1].products[0];
    return { product, items: hotelItems };
  }

  render() {
    const { product, items } = this.props;
    return (
      <Fragment>
        <Head title="Product" />
        <Header />
        <Banner product={product} />
        <SubHeaderProduct product={product} />
        <ItemList items={items} />
      </Fragment>
    );
  }
}
