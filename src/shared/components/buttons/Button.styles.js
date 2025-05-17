import { css } from '@emotion/react';
import theme from '@/shared/styles/theme';

export const buttonVariantStyles = {
  long: css`
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.625rem;
    border: none;
    background: ${theme.colors.potato_orange};
    color: ${theme.colors.white};
    ${theme.typography.textStyles.h4_sb_17};
    text-align: center;
    width: 335px;
  `,

  shortActive: css`
    display: flex;
    width: 5.625rem;
    padding: 0.75rem 6rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.625rem;
    background: ${theme.colors.potato_orange};
    color: ${theme.colors.white};
    ${theme.typography.textStyles.h4_sb_17};
    text-align: center;
  `,

  shortInactive: css`
    display: flex;
    width: 5.625rem;
    padding: 0.75rem 6rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.625rem;
    background: ${theme.colors.gray4};
    color: ${theme.colors.gray8};
    ${theme.typography.textStyles.h4_sb_17};
    text-align: center;
  `,
};
