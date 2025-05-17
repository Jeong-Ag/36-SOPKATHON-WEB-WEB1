import React, { useRef } from 'react';
import styled from '@emotion/styled';
import OnboardingSection from './home/onboarding/OnboardingSection';
import RankingSection from './home/ranking/RankingSection';

const HomePage = () => {
  const rankingRef = useRef(null);
  return (
    <>
      <OnboardingSection
        onScrollToRanking={() => rankingRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <RankingSection ref={rankingRef} />
    </>
  );
};

export default HomePage;
