import { css } from '@emotion/react';

export const getTextStyle =
  (styleName) =>
  ({ theme }) => {
    const style = theme.typography.textStyles[styleName];
    if (!style) return css``;

    return css`
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      letter-spacing: ${style.letterSpacing};
    `;
  };
