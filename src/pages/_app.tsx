import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import '@styles/main.scss';
import { JSX } from 'react';

const theme = {
  colors: {
    primary: 'var(--primary-color)',
  },
};

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
