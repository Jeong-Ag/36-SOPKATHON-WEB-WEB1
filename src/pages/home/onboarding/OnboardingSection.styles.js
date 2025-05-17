import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 667px;
  background: linear-gradient(180deg, rgba(251, 255, 172, 0.87) 0%, #ffffff 84.62%);
  display: flex;
  position: relative;
  justify-content: center;
`;

export const MainImage = styled.img`
  position: absolute;
  top: 51px;
  left: 18px;
  right: 21px;
  width: 336px;
  height: 439px;
  object-fit: contain;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 335px;
`;
