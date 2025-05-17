import React from 'react';
import rankingDetailImage from '@/shared/assets/rankingDetail.png';
import arrow from '@/shared/assets/arrow.svg';
import {
  Wrapper,
  Container,
  ImageContainer,
  TextContainer,
  Title,
  Description,
  Rank,
  ArrowContainer,
} from './CardRanking';

const CardRanking = ({ rank, isArrow }) => {
  return (
    <Wrapper>
      {rank && <Rank>{rank}</Rank>}
      <Container>
        <ImageContainer>
          <img src={rankingDetailImage} alt="rankingDetail" />
        </ImageContainer>
        <TextContainer>
          <Title>놀거리 이름</Title>
          <Description>한줄 설명</Description>
        </TextContainer>
        {isArrow && (
          <ArrowContainer>
            <img src={arrow} alt="arrow" />
          </ArrowContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default CardRanking;
