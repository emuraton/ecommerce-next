import React, { Fragment } from 'react';

// import ProductListing from '../components/scenes/ProductListing';

import Head from '../components/Head';
import Header from '../components/UI/Header';
import Banner from '../components/UI/Banner';

import productGroups from '../mocks/productGroups';

import '../global-styles.css';

export default class extends React.Component {
  static async getInitialProps() {
    const product = productGroups[1].products[0];
    return { product };
  }

  render() {
    const { product } = this.props;
    console.log(product);

    return (
      <Fragment>
        <Head title="Product" />
        <Header />
        <Banner product={product} />
      </Fragment>
    );
  }
}
