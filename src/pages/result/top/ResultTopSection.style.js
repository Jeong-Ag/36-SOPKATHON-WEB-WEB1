import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 30.5rem;
  height: 3.4rem;
  margin-top: 5.1rem;
  margin-bottom: 1.7rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30.5rem;
  height: 41.5rem;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  p {
    ${({ theme }) => theme.typography.textStyles.c7_r_12};
    color: ${({ theme }) => theme.colors.gray7};
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 30.5rem;
  height: 29.5rem;
  overflow: hidden;
  border-radius: 1rem 1rem 0rem 0rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.potato_orange};
  ${({ theme }) => theme.typography.textStyles.h2_sb_20};
  margin-bottom: 0.8rem;
  margin-top: 1.5rem;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.typography.textStyles.b9_r_15};
  color: ${({ theme }) => theme.colors.black_white_black};
  margin-bottom: 1.2rem;
`;
