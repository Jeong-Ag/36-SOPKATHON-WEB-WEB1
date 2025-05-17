import Modal from '@/shared/components/modal/Modal';
import { storedIdData } from '@/shared/components/modal/constants/storedIdData';
import { useState } from 'react';
import ResultTopSection from './result/top/resultTopSection';

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
      <ResultTopSection />
      <button type="button" onClick={handleModalOpen}>
        hiasdfadsfdsafdas
      </button>
      {isModalOpen && <Modal {...storedIdData} handleModalClose={handleModalClose} />}
    </>
  );
};

export default ResultPage;
