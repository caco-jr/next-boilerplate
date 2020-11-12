import React from 'react';

import { HomeTitle } from './style';
import Layout from '@components/Layout';

export const HomePage = (): JSX.Element => (
  <Layout>
    <section className="container">
      <HomeTitle>Hello World!</HomeTitle>
    </section>
  </Layout>
);

export default HomePage;
