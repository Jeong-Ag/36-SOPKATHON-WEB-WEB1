import React from 'react';
import { useState } from 'react';
import { ChipWrapper, Button } from './ChipRanking.styles';

const ChipRanking = () => {
  const [activeTab, setActiveTab] = useState('food');
  return (
    <ChipWrapper>
      <Button isActive={activeTab === 'food'} onClick={() => setActiveTab('food')}>
        먹거리
      </Button>
      <Button isActive={activeTab === 'fun'} onClick={() => setActiveTab('fun')}>
        놀거리
      </Button>
    </ChipWrapper>
  );
};

export default ChipRanking;
