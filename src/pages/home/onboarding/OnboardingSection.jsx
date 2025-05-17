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
          text="나한테 딱 맞는 장소 찾기"
          variant="long"
          onClick={() => {
            navigate(PATH.TEST);
          }}
        />
        <Button
          text="다시 가고 싶어 X에게 물어본 그곳은?"
          variant="long"
          onClick={onScrollToRanking}
        />
      </ButtonContainer>
    </Container>
  );
};

export default OnboardingSection;
