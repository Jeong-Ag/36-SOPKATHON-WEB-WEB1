import Modal from '@/shared/components/modal/Modal';
import { storedIdData } from '@/shared/components/modal/constants/storedIdData';
import { useState } from 'react';
import FoodSection from './result/foodSection';

const ResultPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleModalOpen}>
        hiasdfadsfdsafdas
      </button>
      {isModalOpen && <Modal {...storedIdData} handleModalClose={handleModalClose} />}
      <FoodSection handleModalOpen={handleModalOpen} />
    </>
  );
};

export default ResultPage;
