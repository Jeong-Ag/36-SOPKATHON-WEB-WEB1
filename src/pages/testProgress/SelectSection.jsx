import { useEffect, useState } from 'react';
import SelectBox from '../../shared/components/selectBox/SelectBox';
import { Container, MainImage, Question, SelectBoxContainer } from './SelectSection.styles';
import { TERMINAL } from '@/constants/terminal';
import CardSelectGroup from '@/shared/components/Test/CardSelectGroup';
import question from '../../mocks/question.json';

const SelectSection = ({ setNext, stepIndex, setStep }) => {
  const [selected, setSelected] = useState('터미널을 선택하세요');
  const [isCardSelected, setIsCardSelected] = useState(false);

  useEffect(() => {
    if (selected !== '터미널을 선택하세요') {
      setNext(true);
    }
  }, [selected, setNext]);

  useEffect(() => {
    setStep((stepIndex + 1) * 16);
    console.log(stepIndex);
  }, [stepIndex, setStep]);

  return (
    <Container>
      <MainImage
        src={stepIndex === 0 ? '/potato_q1.png' : `/potato_q${stepIndex + 1}.png`}
        alt="1번째"
      />
      <SelectBoxContainer>
        <Question>{stepIndex === 0 ? '터미널을 선택하세요' : question[stepIndex - 1].Q}</Question>
        {stepIndex === 0 ? (
          <SelectBox options={TERMINAL} value={selected} onChange={setSelected} />
        ) : (
          <CardSelectGroup
            questionA={question[stepIndex - 1].A}
            questionB={question[stepIndex - 1].B}
            isCardSelected={isCardSelected}
            setIsCardSelected={setIsCardSelected}
          />
        )}
      </SelectBoxContainer>
    </Container>
  );
};

export default SelectSection;
