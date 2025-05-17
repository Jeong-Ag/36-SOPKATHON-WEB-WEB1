import { Global, ThemeProvider } from '@emotion/react';
import theme from './shared/styles/theme';
import GlobalStyle from './global.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      {/* 여기 작성 */}
      {/* <div>hi</div> */}
    </ThemeProvider>
  );
}

export default App;
