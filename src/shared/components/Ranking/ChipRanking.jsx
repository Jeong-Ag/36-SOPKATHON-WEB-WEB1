import React from 'react';
import { ChipWrapper, Button } from './ChipRanking.styles';

const ChipRanking = ({ activeTab, setActiveTab }) => {
  return (
    <ChipWrapper>
      <Button isActive={activeTab === 'food'} onClick={() => setActiveTab('food')}>
        먹거리
      </Button>
      <Button isActive={activeTab === 'activity'} onClick={() => setActiveTab('activity')}>
        놀거리
      </Button>
    </ChipWrapper>
  );
};

export default ChipRanking;
