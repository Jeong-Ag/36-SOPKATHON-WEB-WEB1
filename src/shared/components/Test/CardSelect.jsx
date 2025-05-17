import React from 'react';
import { ButtonWrapper, Circle, Text } from './CardSelect.styles';

const CardSelect = ({ isActive, onClick, text, hasClicked }) => {
  return (
    <ButtonWrapper isActive={isActive} onClick={onClick} hasClicked={hasClicked}>
      <Circle isActive={isActive} hasClicked={hasClicked}>
        A
      </Circle>
      <Text isActive={isActive} hasClicked={hasClicked}>
        {text}
      </Text>
    </ButtonWrapper>
  );
};

export default CardSelect;
