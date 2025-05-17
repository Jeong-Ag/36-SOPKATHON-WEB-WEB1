import styled from '@emotion/styled';

export const Potato = styled.div`
  width: 5.5rem;
  height: 5rem;
  background: url('/assets/q-potato.svg') no-repeat center/contain;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const QuestionText = styled.h2`
  margin-top: 1.5rem;
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 1%;
  text-align: center;
  color: #000;
`;

export const ChoiceWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
