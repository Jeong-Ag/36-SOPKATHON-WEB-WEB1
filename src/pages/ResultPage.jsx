import Modal from '@/shared/components/modal/Modal';
import { storedIdData } from '@/shared/components/modal/constants/storedIdData';
import { useState } from 'react';
import ResultTopSection from './result/top/resultTopSection';
import FoodSection from './result/FoodSection';
import { Container } from './ResultPage.styles';

const ResultPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <ResultTopSection
        onClick={handleModalOpen}
        restName="안목해변"
        resetImageUrl="/example.png"
        resetIntroduction="안목해변에서 편안하게 쉬어보세요!"
      />
      <FoodSection handleModalOpen={handleModalOpen} />
      {isModalOpen && <Modal {...storedIdData} handleModalClose={handleModalClose} />}
    </Container>
  );
};

export default ResultPage;
