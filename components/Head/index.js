// @flow
import Head from 'next/head';

type Props = {
  title: string,
};

const Meta = ({ title }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="preload" href="/static/fonts/helvetica.woff2" as="font" type="font/woff2" />
  </Head>
);
export default Meta;
