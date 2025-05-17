import { useEffect, useState } from 'react';
import SelectBox from '../../shared/components/selectBox/SelectBox';
import { Container, MainImage, Question, SelectBoxContainer } from './SelectSection.styles';
import { TERMINAL } from '@/constants/terminal';

const SelectSection = ({ setNext }) => {
  const [selected, setSelected] = useState('터미널을 선택하세요');

  useEffect(() => {
    if (selected !== '터미널을 선택하세요') {
      setNext(true);
    }
  }, [selected, setNext]);

  return (
    <Container>
      <MainImage src="/potato_q1.png" alt="1번째" />
      <SelectBoxContainer>
        <Question>원하는 터미널을 선택하세요</Question>
        <SelectBox options={TERMINAL} value={selected} onChange={setSelected} />
      </SelectBoxContainer>
    </Container>
  );
};

export default SelectSection;
