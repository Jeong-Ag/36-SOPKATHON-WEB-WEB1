import { RouterProvider } from 'react-router-dom';
import theme from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';
import { Global, ThemeProvider } from '@emotion/react';
import Routes from './routes/Routes';
import RankingDetail from './shared/components/RankingDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={Routes} />
      <RankingDetail />
    </ThemeProvider>
  );
}

export default App;
