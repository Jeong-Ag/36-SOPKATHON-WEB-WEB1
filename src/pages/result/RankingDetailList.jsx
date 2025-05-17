import { Container } from './RankingDetailList.styles';
import CardRanking from '@/shared/components/Ranking/CardRanking';

const RankingDetailList = ({ handleModalOpen, restaurants }) => {
  return (
    <Container>
      {restaurants.map(({ restName, restImageUrl, restIntroduction, id }) => (
        <CardRanking
          key={restName}
          title={restName}
          description={restIntroduction}
          img={restImageUrl}
          onClick={() => handleModalOpen('restaurant', id)}
        />
      ))}
    </Container>
  );
};

export default RankingDetailList;
