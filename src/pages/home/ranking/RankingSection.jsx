import React, { useState, forwardRef, useEffect } from 'react';
import ChipRanking from '@/shared/components/Ranking/ChipRanking.jsx';
import CardRanking from '@/shared/components/Ranking/CardRanking.jsx';
import { Header, CardContainer } from './RankingSection.styles';
import http from '@/shared/apis/http';

const RankingSection = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState('food');
  const [dataToRender, setDataToRender] = useState([]);

  const getRanking = async () => {
    try {
      const response = await http.get('/api/best', {
        params: {
          category: activeTab,
        },
      });
      console.log(response.data);
      setDataToRender(response.data.data.bestList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRanking();
  }, [activeTab]);

  return (
    <div ref={ref}>
      <Header>
        <img src="/ranking_banner.png" alt="TOP10" />
      </Header>
      <ChipRanking activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardContainer>
        {Array.isArray(dataToRender) &&
          dataToRender.map((item, index) => (
            <CardRanking
              key={index}
              rank={index + 1}
              title={item.name}
              description={item.introduction}
              img={item.imageUrl}
            />
          ))}
      </CardContainer>
    </div>
  );
});

export default RankingSection;
