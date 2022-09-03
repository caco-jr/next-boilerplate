import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import '@styles/main.scss';

const theme = {
  colors: {
    primary: 'var(--primary-color)',
  },
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
