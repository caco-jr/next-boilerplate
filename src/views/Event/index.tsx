import React from 'react';

import { EventTitle } from './style';
import Layout from '@components/Layout';
import Countdown from '@components/Countdown';

export const EventPage = (): JSX.Element => (
  <Layout>
    <section className="container">
      <EventTitle>
        Falta <Countdown /> para 2020 acabar
      </EventTitle>
    </section>
  </Layout>
);

export default EventPage;
