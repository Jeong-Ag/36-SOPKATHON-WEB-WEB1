import {
  Container,
  HeaderContainer,
  MainContainer,
  ImageContainer,
  Title,
  SubTitle,
} from './ResultTopSection.style';

const ResultTopSection = ({ restName, resetImageUrl, resetIntroduction, onClick }) => {
  return (
    <Container>
      <HeaderContainer>
        <img src="/result_header.png" alt="result_header" />
      </HeaderContainer>
      <MainContainer>
        <ImageContainer>
          <img src={resetImageUrl} alt="main_image"></img>
        </ImageContainer>
        <Title>{restName}</Title>
        <SubTitle>{resetIntroduction}</SubTitle>
        <p onClick={onClick}>더 궁금해요 &gt;</p>
      </MainContainer>
    </Container>
  );
};

export default ResultTopSection;
