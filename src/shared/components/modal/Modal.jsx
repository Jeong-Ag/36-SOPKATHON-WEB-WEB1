import http from '@/shared/apis/http';
import { useEffect, useState } from 'react';
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

const activityId = 1;
const restaurantId = 9;

const Modal = ({ handleModalClose, type }) => {
  const [modalData, setModalData] = useState(null);

  const getData = async () => {
    try {
      const response = await http.get(
        type === 'activity'
          ? `/api/pick/activity/${activityId}`
          : `/api/pick/restaurant/${restaurantId}`
      );
      setModalData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  if (!modalData) return null;

  const { name, imageUrl, address, phone, time, category, description } = modalData;

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
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <rect width="24" height="24" fill="white"></rect>{' '}
                  <path
                    d="M7 17L16.8995 7.10051"
                    stroke="#868D95"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M7 7.00001L16.8995 16.8995"
                    stroke="#868D95"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
