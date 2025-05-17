import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from './shared/styles/GlobalStyle';
import theme from './shared/styles/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
    </ThemeProvider>
  );
}

export default App;
