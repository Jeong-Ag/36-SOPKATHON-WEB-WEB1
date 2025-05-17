import { css } from '@emotion/react';
import { reset } from './reset';

const GlobalStyle = css`
  ${reset}

  @font-face {
    font-family: Pretendard;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-display: block;
  }

  @font-face {
    font-family: Pretendard;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
    font-weight: 500;
    font-display: block;
  }

  @font-face {
    font-family: Pretendard;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
    font-weight: 600;
    font-display: block;
  }

  @font-face {
    font-family: Pretendard;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-display: block;
  }

  :root {
    font-family: Pretendard !important;
  }

  * {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    width: 375px;
    height: 667px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
