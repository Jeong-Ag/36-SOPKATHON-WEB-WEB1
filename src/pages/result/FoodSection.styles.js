//FoodSection.styles.js
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.textStyles.h5_sb_16};
`;

export const FoodList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
