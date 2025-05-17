import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Container = styled.div`
  width: 30.5rem;
  height: 7.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 1rem;
  display: flex;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  img {
    width: 8.5rem;
    height: 7.2rem;
    object-fit: cover;
    border-radius: 1rem 0rem 0rem 1rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  padding-left: 1.2rem;
  width: 17.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.textStyles.c3_sb_14};
`;

export const Description = styled.div`
  ${({ theme }) => theme.typography.textStyles.c7_r_12};
  color: ${({ theme }) => theme.colors.gray8};
`;

export const Rank = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.potato_orange};
  ${({ theme }) => theme.typography.textStyles.c3_sb_14};
  text-align: center;
  line-height: 2rem;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.potato_yellow};
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2.6019rem;
    height: 2.4rem;
  }
`;
