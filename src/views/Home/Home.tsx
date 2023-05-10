import { FunctionComponent } from 'react';
import * as S from './Home.styles';
import Layout from '@components/Layout';

export const HomePage: FunctionComponent = () => (
  <Layout title="Home">
    <S.Wrapper className="container">
      <S.Title>Hello World</S.Title>
    </S.Wrapper>
  </Layout>
);

export default HomePage;
