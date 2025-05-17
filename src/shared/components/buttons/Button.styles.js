import { css } from '@emotion/react';
import theme, { typo } from '@/shared/styles/theme';

const baseButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border: none;
  text-align: center;
  ${typo.h4_sb_17};
`;

export const buttonVariantStyles = {
  long: css`
    ${baseButtonStyle};
    padding: 12px;
    background: ${theme.colors.potato_orange};
    color: ${theme.colors.white};
    width: 335px;
  `,

  short: css`
    ${baseButtonStyle};
    width: 90px;
    padding: 12px 0;
    background: ${theme.colors.potato_orange};
    color: ${theme.colors.white};
  `,

  shortDisabled: css`
    ${baseButtonStyle};
    width: 90px;
    padding: 12px 0;
    background: ${theme.colors.gray4};
    color: ${theme.colors.gray8};
  `,
};
