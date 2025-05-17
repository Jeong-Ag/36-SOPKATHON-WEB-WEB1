import Button from '@/shared/components/buttons/Button';
import SelectSection from './testProgress/SelectSection';
import { useState } from 'react';
import { ButtonContainer, Container } from './TestPage.styles';
import ProgressBar from '@/components/progressBar/ProgressBar';

const TestPage = () => {
  const [next, setNext] = useState(false);
  const [step, setStep] = useState(16);

  return (
    <Container>
      <ProgressBar fill={step} />
      <SelectSection setNext={setNext} />
      <ButtonContainer>
        <Button text="이전" variant="short" />
        <Button text="다음" variant="short" disabled={!next} />
      </ButtonContainer>
    </Container>
  );
};

export default TestPage;
