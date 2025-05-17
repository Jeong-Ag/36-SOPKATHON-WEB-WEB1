import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  width: 15.9rem;
  height: 16.3rem;
  border-color: ${({ theme }) => theme.colors.gray3};
  border: ${({ isActive, theme }) =>
    `${isActive ? '2px' : '1px'} solid ${
      isActive ? theme.colors.potato_orange : theme.colors.gray3
    }`};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: ${({ isActive, hasClicked, theme }) =>
    !isActive && hasClicked ? theme.colors.gray3 : theme.colors.potato_orange};
  color: ${({ isActive, hasClicked, theme }) =>
    !isActive && hasClicked ? theme.colors.gray8 : theme.colors.potato_yellow};
  ${({ theme }) => theme.typography.textStyles.c3_sb_14};
  text-align: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const Text = styled.div`
  ${({ theme }) => theme.typography.textStyles.h5_sb_16};
  color: ${({ isActive, hasClicked, theme }) =>
    !isActive && hasClicked ? theme.colors.gray3 : theme.colors.black};
  padding: 24px;
  text-align: center;
  white-space: pre-wrap;
`;
