import React from 'react';

import { HomeTitle } from './style';
import Layout from '@components/Layout';
import Countdown from '@components/Countdown';

export const HomePage = (): JSX.Element => (
  <Layout>
    <section className="container">
      <HomeTitle>
        Falta <Countdown /> para 2020 acabar
      </HomeTitle>
    </section>
  </Layout>
);

export default HomePage;
