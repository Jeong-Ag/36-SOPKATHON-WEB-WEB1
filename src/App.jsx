import { Global, ThemeProvider } from '@emotion/react';
import theme from './shared/styles/theme';
import GlobalStyle from './global.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <h1>123123s</h1>
    </ThemeProvider>
  );
}

export default App;
