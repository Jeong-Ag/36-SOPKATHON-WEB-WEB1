import {
  Overlay,
  Container,
  ModalContentWrapper,
  ButtonWrapper,
  Category,
  TitleWrapper,
  Title,
  InfoWrapper,
  TitleCategory,
  ModalImage,
  InfoAddress,
  ContectInfo,
  ContectInfoWrapper,
  ContectInfoText,
  ContectText,
  Description,
  ContentWrapper,
  BottomWrapper,
  CloseButton,
} from './Modal.styles';

const Modal = ({
  name,
  imageUrl,
  address,
  phone,
  time,
  category,
  description,
  handleModalClose,
}) => {
  return (
    <Overlay>
      <Container>
        <ModalContentWrapper>
          <ButtonWrapper>
            <CloseButton onClick={handleModalClose} type="button">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <rect width="24" height="24" fill="white"></rect>{' '}
                  <path
                    d="M7 17L16.8995 7.10051"
                    stroke="#868D95"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{' '}
                  <path
                    d="M7 7.00001L16.8995 16.8995"
                    stroke="#868D95"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            </CloseButton>
          </ButtonWrapper>

          <ContentWrapper>
            <ModalImage src={imageUrl} alt="storeImage" />
            <InfoWrapper>
              <BottomWrapper>
                <TitleWrapper>
                  <TitleCategory>
                    <Title>{name}</Title>
                    {category && <Category>{category}</Category>}
                  </TitleCategory>
                  <InfoAddress>{address}</InfoAddress>
                </TitleWrapper>
                <ContectInfoWrapper>
                  <ContectInfo>
                    <ContectInfoText>전화번호</ContectInfoText>
                    <ContectText>{phone}</ContectText>
                  </ContectInfo>
                  <ContectInfo>
                    <ContectInfoText>영업시간</ContectInfoText>
                    <ContectText>{time}</ContectText>
                  </ContectInfo>
                </ContectInfoWrapper>
              </BottomWrapper>
              {description && <Description>{description}</Description>}
            </InfoWrapper>
          </ContentWrapper>
        </ModalContentWrapper>
      </Container>
    </Overlay>
  );
};

export default Modal;
