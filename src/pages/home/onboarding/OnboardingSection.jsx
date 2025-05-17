import Button from '@/shared/components/buttons/Button.jsx';
import { ButtonContainer, Container, MainImage } from './OnboardingSection.styles.js';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.js';

const OnboardingSection = ({ onScrollToRanking }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <MainImage src="/main_image.png" alt="메인 이미지" />
      <ButtonContainer>
        <Button
          text="테스트 하러 가기"
          variant="long"
          onClick={() => {
            navigate(PATH.TEST);
          }}
        />
        <Button text="TOP 10 랭킹 보러가기" variant="long" onClick={onScrollToRanking} />
      </ButtonContainer>
    </Container>
  );
};

export default OnboardingSection;
