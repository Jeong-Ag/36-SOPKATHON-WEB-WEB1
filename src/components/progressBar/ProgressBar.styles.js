import styled from '@emotion/styled';

export const ProgressBarContainer = styled.div`
  width: 335px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.gray3};
  border-radius: 5px;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.potato_orange};
  width: ${({ width }) => width}%;
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
`;
