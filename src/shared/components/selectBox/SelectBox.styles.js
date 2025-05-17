import { css } from '@emotion/react';
import theme from '@/shared/styles/theme';

export const selectWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 18.5625rem;
  border-radius: 0.5rem;
`;

export const selectHeader = css`
  display: flex;
  width: 18.5625rem;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.625rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3}; // #E6E6E6
`;

export const selectHeaderExpanded = css`
  border-bottom: 1px solid ${theme.colors.gray3};
`;

export const selectText = css`
  flex: 1 0 0;
  color: ${theme.colors.gray8}; // #737373
  ${theme.typography.textStyles.b7_r_16};
`;

export const caretIcon = css`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

export const dropdown = css`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.white};
  width: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const dropdownItem = css`
  display: flex;
  padding: 0.625rem 1rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  background: ${theme.colors.white};
  border-radius: 0.5rem;
  color: ${theme.colors.gray10}; // #484848
  ${theme.typography.textStyles.b7_r_16};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.gray1};
  }
`;
