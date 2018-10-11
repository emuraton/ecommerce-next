import React, { Fragment } from 'react';

import CategoryMenu from '../components/CategoryMenu';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Head from '../components/Head';

const mockedCategories = ['Ticket', 'Hotel'];

const Page = () => {
  return (
    <Fragment>
      <Head title="Product Listing" />
      <Header />
      <CategoryMenu categories={mockedCategories} />
      <ProductList />
    </Fragment>
  );
};
export default Page;
