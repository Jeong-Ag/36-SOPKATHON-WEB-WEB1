import React from 'react';
import CardSelect from './CardSelect';
import styled from '@emotion/styled';
import { useState } from 'react';

const CardSelectBox = () => {
  const [activeButton, setActiveButton] = useState();
  return (
    <Wrapper>
      <CardSelect isActive={activeButton === 1} onClick={() => setActiveButton(1)} />
      <CardSelect isActive={activeButton === 2} onClick={() => setActiveButton(2)} />
    </Wrapper>
  );
};

export default CardSelectBox;

const Wrapper = styled.div`
  display: flex;
  gap: 1.7rem;
`;
