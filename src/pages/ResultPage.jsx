import Modal from '@/shared/components/modal/Modal';
import { useEffect, useState } from 'react';
import ResultTopSection from './result/top/ResultTopSection';
import FoodSection from './result/FoodSection';
import { Container } from './ResultPage.styles';
import http from '../shared/apis/http';

const bundleId = 1;

const ResultPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  const [activities, setActivities] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const getList = async () => {
    try {
      const response = await http.get(`/api/pick/${bundleId}`);
      setRestaurants(response.data.data.restaurants);
      setActivities(response.data.data.activities[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalOpen = (type, id) => {
    setModalType(type);
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalType(null);
    setSelectedId(null);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Container>
      {activities && (
        <ResultTopSection
          onClick={() => handleModalOpen('activity', activities.id)}
          restName={activities.actName}
          restImageUrl={activities.actImageUrl}
          resetIntroduction={activities.actIntroduction}
        />
      )}

      {restaurants && <FoodSection restaurants={restaurants} handleModalOpen={handleModalOpen} />}
      {isModalOpen && (
        <Modal
          type={modalType}
          activityId={modalType === 'activity' ? selectedId : null}
          restaurantId={modalType === 'restaurant' ? selectedId : null}
          handleModalClose={handleModalClose}
        />
      )}
    </Container>
  );
};

export default ResultPage;
