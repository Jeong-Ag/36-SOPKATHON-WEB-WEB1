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
} from './CardRanking.styles';

const CardRanking = ({ rank, isArrow, title, description, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {rank && <Rank>{rank}</Rank>}
      <Container>
        <ImageContainer>
          <img src={rankingDetailImage} alt="rankingDetail" />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
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
