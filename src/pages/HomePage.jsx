import React from 'react';
import styled from '@emotion/styled';
import ChipRanking from '@/shared/components/Ranking/ChipRanking.jsx';
import CardRanking from '@/shared/components/Ranking/CardRanking.jsx';

const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <ChipRanking />
        <CardRanking number={1} />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div``;
