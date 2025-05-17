import Button from '@/shared/components/buttons/Button.jsx';
import { Title, FoodList, Container } from './FoodSection.styles';
import RankingDetailList from './RankingDetailList';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const FoodSection = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FoodList>
        <Title>근처 먹거리도 추천드려요!</Title>
        <RankingDetailList />
      </FoodList>
      <Button
        text="테스트 하러 가기"
        variant="long"
        onClick={() => {
          navigate(PATH.TEST);
        }}
        styles={{ backgroundColor: '#D9D9D9' }}
      />
    </Container>
  );
};

export default FoodSection;
