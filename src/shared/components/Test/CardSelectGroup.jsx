import React from 'react';
import { useState } from 'react';
import CardSelect from './CardSelect';
import { ButtonContainer } from './CardSelectGroup.styles';

const CardSelectGroup = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);

  const handleClick = (index) => {
    setActiveButton(index);
    setHasClicked(true);
  };
  return (
    <ButtonContainer>
      <CardSelect
        isActive={activeButton === 1}
        hasClicked={hasClicked}
        onClick={() => handleClick(1)}
        text={
          <>
            저는 편하게
            <br />
            쉬고 싶어요
          </>
        }
      />
      <CardSelect
        isActive={activeButton === 2}
        hasClicked={hasClicked}
        onClick={() => handleClick(2)}
        text={
          <>
            저는 편하게
            <br />
            쉬고 싶어요
          </>
        }
      />
    </ButtonContainer>
  );
};

export default CardSelectGroup;
