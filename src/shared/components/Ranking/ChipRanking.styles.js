import styled from '@emotion/styled';

export const ChipWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Button = styled.button`
  padding: 0.4rem 1.8rem;
  border-radius: 1.1rem;
  ${({ theme }) => theme.typography.textStyles.c7_r_12}
  border:none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.potato_orange : theme.colors.gray2};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.gray8)};
`;
