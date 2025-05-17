import React from 'react';
import styled from '@emotion/styled';

const TestButton = ({ isActive, onClick }) => {
  return (
    <ButtonWrapper isActive={isActive} onClick={onClick}>
      <Circle>A</Circle>
      <Text>
        저는 편하게
        <br /> 쉬고 싶어요
      </Text>
    </ButtonWrapper>
  );
};

export default TestButton;

const ButtonWrapper = styled.div`
  width: 15.9rem;
  height: 16.3rem;
  border-color: ${({ theme }) => theme.colors.gray3};
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.colors.potato_orange : theme.colors.gray3)};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive, theme }) => (isActive ? 'transparent' : theme.colors.gray3)};
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.potato_orange};
  color: ${({ theme }) => theme.colors.potato_yellow};
  ${({ theme }) => theme.typography.textStyles.c3_sb_14};
  text-align: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.textStyles.h5_sb_16};
`;
