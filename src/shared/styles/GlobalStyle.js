import { css } from "@emotion/react";
import { reset } from "./reset.css";

const GlobalStyle = css`
  ${reset}

  html, body {
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
