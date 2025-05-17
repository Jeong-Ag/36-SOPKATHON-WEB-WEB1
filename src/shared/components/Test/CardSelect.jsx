import React from 'react';
import { ButtonWrapper, Circle, Text } from './CardSelect.styles';

const CardSelect = ({ isActive, onClick, text, hasClicked, alphabet }) => {
  return (
    <ButtonWrapper isActive={isActive} onClick={onClick} hasClicked={hasClicked}>
      <Circle isActive={isActive} hasClicked={hasClicked}>
        {alphabet}
      </Circle>
      <Text isActive={isActive} hasClicked={hasClicked}>
        {text}
      </Text>
    </ButtonWrapper>
  );
};

export default CardSelect;
