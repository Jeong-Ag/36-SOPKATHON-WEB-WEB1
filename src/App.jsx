import { Global, ThemeProvider } from '@emotion/react';
import theme from '@/shared/styles/theme';
import GlobalStyle from './global';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Routes} />
    </ThemeProvider>
  );
}

export default App;
