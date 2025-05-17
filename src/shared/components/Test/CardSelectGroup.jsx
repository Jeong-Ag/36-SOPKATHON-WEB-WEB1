import React, { useState, useEffect } from 'react';
import CardSelect from './CardSelect';
import { CardContainer } from './CardSelectGroup.styles';

const CardSelectGroup = ({ questionA, questionB, isCardSelected, setIsCardSelected }) => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setActiveButton(null);
    setIsCardSelected(false);
  }, [questionA, questionB, setIsCardSelected]);

  const handleClick = (index) => {
    setActiveButton(index);
    setIsCardSelected(true);
  };

  return (
    <CardContainer>
      <CardSelect
        isActive={activeButton === 1}
        hasClicked={isCardSelected}
        onClick={() => handleClick(1)}
        text={questionA}
        alphabet="A"
      />
      <CardSelect
        isActive={activeButton === 2}
        hasClicked={isCardSelected}
        onClick={() => handleClick(2)}
        text={questionB}
        alphabet="B"
      />
    </CardContainer>
  );
};

export default CardSelectGroup;
