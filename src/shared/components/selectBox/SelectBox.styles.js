import { css } from '@emotion/react';
import theme from '@/shared/styles/theme';

export const selectWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 10px 16px;
  width: 297px;
`;

export const selectHeader = css`
  display: flex;
  padding: 10px 16px;
  padding-right: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 297px;
  border-radius: 0.625rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3}; // #E6E6E6
`;

export const selectHeaderExpanded = css`
  border-bottom: 1px solid ${theme.colors.gray3};
`;

export const selectText = css`
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
  width: 297px;
  max-height: 180px;
  flex-direction: column;
  background: ${theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${theme.colors.gray4};
  overflow-y: auto;
`;

export const dropdownItem = css`
  display: flex;
  padding: 10px 16px;
  align-items: center;
  background: ${theme.colors.white};
  color: ${theme.colors.gray10};
  ${theme.typography.textStyles.b7_r_16};
  cursor: pointer;

  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }

  &:hover {
    background-color: ${theme.colors.gray1};
  }
`;
