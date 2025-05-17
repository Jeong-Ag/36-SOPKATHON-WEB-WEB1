import { Container } from './RankingDetailList.styles';
import pick from '@/mocks/pick.json';
import CardRanking from '@/shared/components/Ranking/CardRanking';

const RankingDetailList = () => {
  return (
    <Container>
      {pick.restaurants.map(({ restName, restImageUrl, restIntroduction }) => (
        <CardRanking
          key={restName}
          title={restName}
          description={restIntroduction}
          img={restImageUrl}
        />
      ))}
    </Container>
  );
};

export default RankingDetailList;
