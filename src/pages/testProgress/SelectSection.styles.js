import { typo } from '@/shared/styles/theme';
import styled from '@emotion/styled';

export const MainImage = styled.img`
  width: 55px;
  height: 79px;
  margin-bottom: 20px;
  margin-top: 36px;
`;

export const Question = styled.p`
  ${typo.h4_sb_17};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`;
