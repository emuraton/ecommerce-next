import Head from 'next/head';

import '../global-styles.css';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Helvetica:300,400,700,800"
        as="font"
        type="font/woff2"
        crossorigin
      />
    </Head>
  );
};
export default Meta;
