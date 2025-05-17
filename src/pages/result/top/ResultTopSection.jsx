import React from 'react';
import {
  Container,
  HeaderContainer,
  MainContainer,
  ImageContainer,
  Title,
  SubTitle,
} from './ResultTopSection.style';

const ResultTopSection = ({ onClick }) => {
  return (
    <Container>
      <HeaderContainer>
        <img src="/result_header.png" alt="result_header" />
      </HeaderContainer>
      <MainContainer>
        <ImageContainer>
          <img src="/example.png" alt="main_image"></img>
        </ImageContainer>
        <Title>안목해변</Title>
        <SubTitle>안목해변에서 편안하게 쉬어보세요!</SubTitle>
        <p onClick={onClick}>더 궁금해요</p>
      </MainContainer>
    </Container>
  );
};

export default ResultTopSection;
