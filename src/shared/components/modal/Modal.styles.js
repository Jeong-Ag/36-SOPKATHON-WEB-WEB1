import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem 1.4rem 2rem 1.4rem;
  gap: 0.6rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ModalImage = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  width: 237px;
  height: 214px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const TitleCategory = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.textStyles.c8_sb_12};
`;

export const Category = styled.div`
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.potato_orange};
  color: ${({ theme }) => theme.colors.potato_orange};
  ${({ theme }) => theme.typography.textStyles.f3_r_10};
`;

export const InfoAddress = styled.div`
  color: ${({ theme }) => theme.colors.gray10};
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const ContectInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const ContectInfo = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const ContectInfoText = styled.div`
  color: ${({ theme }) => theme.colors.potato_orange};
  ${({ theme }) => theme.typography.textStyles.c8_sb_12};
`;

export const ContectText = styled.div`
  color: ${({ theme }) => theme.colors.gray10};
  ${({ theme }) => theme.typography.textStyles.c7_r_12};
`;

export const Description = styled.div`
  padding: 0.9rem 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.typography.textStyles.c7_r_12};
`;
