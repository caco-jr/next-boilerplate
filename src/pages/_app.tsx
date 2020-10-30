import { ThemeProvider } from 'styled-components';

import '@styles/main.scss';

const theme = {
  colors: {
    primary: 'var(--primary-color)',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
