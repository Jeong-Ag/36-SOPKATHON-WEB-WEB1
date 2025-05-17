import Button from '@/shared/components/buttons/Button';
import SelectSection from './testProgress/SelectSection';
import { useState } from 'react';
import { ButtonContainer, Container } from './TestPage.styles';
import ProgressBar from '@/components/progressBar/ProgressBar';
import question from '../mocks/question.json';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const TestPage = () => {
  const navigate = useNavigate();
  const [next, setNext] = useState(false);
  const [step, setStep] = useState(16);
  const [stepIndex, setStepIndex] = useState(0);

  const handleNext = async () => {
    if (stepIndex === question.length) {
      navigate(PATH.RESULT);
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <Container>
      <ProgressBar fill={step} />
      <SelectSection setNext={setNext} stepIndex={stepIndex} setStep={setStep} />
      <ButtonContainer>
        <Button text="이전" variant="short" />
        <Button
          text={stepIndex === question.length ? '결과보기' : '다음'}
          variant="short"
          disabled={!next}
          onClick={handleNext}
        />
      </ButtonContainer>
    </Container>
  );
};

export default TestPage;
