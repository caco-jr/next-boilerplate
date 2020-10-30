import React, { ReactNode, FunctionComponent } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
      />
    </Head>

    <main>{children}</main>
  </>
);

Layout.defaultProps = {
  title: 'Quanto Falta',
};

export default Layout;
