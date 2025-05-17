import React, { useRef } from 'react';
import styled from '@emotion/styled';
import OnboardingSection from './home/onboarding/OnboardingSection';
import RankingSection from './home/ranking/RankingSection';

const HomePage = () => {
  const rankingRef = useRef(null);
  return (
    <Wrapper>
      <div>
        <OnboardingSection
          onScrollToRanking={() => rankingRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
        <RankingSection ref={rankingRef} />
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div``;
