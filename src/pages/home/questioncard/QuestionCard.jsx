import { useState } from 'react';
import styled from '@emotion/styled';
import Card from '@/components/cards/Card';
import Button from '@/components/buttons/Button';
import ChoiceCard from '@/components/choices/ChoiceCard';

const QuestionCard = ({ number, question, choiceA, choiceB }) => {
  const [selected, setSelected] = useState(null);

  return (
    <Card direction="column" align="center" gap="2rem">
      <Potato src="/potato_q2.png" alt={number} />
      <QuestionText>{question}</QuestionText>
      <ChoiceWrapper>
        <ChoiceCard label="A" content={choiceA} selected={selected === 'A'} onClick={() => setSelected('A')} />
        <ChoiceCard label="B" content={choiceB} selected={selected === 'B'} onClick={() => setSelected('B')} />
      </ChoiceWrapper>
      <ButtonWrapper>
        <Button variant="mainFilled" size="short">이전</Button>
        <Button variant="mainFilled" size="short" disabled={!selected}>다음</Button>
      </ButtonWrapper>
    </Card>
  );
};

export default QuestionCard;

const Potato = styled.img`
  width: 5.5089rem;
  height: 7.9rem;
  object-fit: contain;
`;

const QuestionText = styled.h2`
  margin-top: 1.5rem;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 1%;
  text-align: center;
  color: #000;
`;

const ChoiceWrapper = styled.div`
  margin-top: 2.6rem;
  display: flex;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
