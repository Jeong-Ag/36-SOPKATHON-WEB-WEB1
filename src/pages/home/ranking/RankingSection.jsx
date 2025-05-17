import React, { useState, forwardRef } from 'react';
import ChipRanking from '@/shared/components/Ranking/ChipRanking.jsx';
import CardRanking from '@/shared/components/Ranking/CardRanking.jsx';
import { Header, CardContainer } from './RankingSection.styles';
import { food, activity } from '@/mocks/ranking';

const RankingSection = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('food');
  const dataToRender = activeTab === 'food' ? food : activity;
  return (
    <div ref={ref}>
      <Header>
        <img src="/ranking_banner.png" alt="TOP10" />
      </Header>
      <ChipRanking activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardContainer>
        {dataToRender.map((item) => (
          <CardRanking
            key={item.rank}
            rank={item.rank}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </CardContainer>
    </div>
  );
});

export default RankingSection;
