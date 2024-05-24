import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import Content from "../../components/MyPage/Apointment/Content";
import { useLocation } from "react-router-dom";
import ApointmentCompleteModal from "../../components/MyPage/Apointment/ApointmentCompleteModal";

const Apointment = () => {
  const location = useLocation();
  const showModal = location.state?.showModal || false;
  const [isModalOpen, setIsModalOpen] = useState(showModal);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <NavBar>
        마이페이지 &gt; 병원 예약내역 보기
      </NavBar>
      <Content />
      {isModalOpen && (
        <ApointmentCompleteModal 
          show={isModalOpen} 
          handleClose={handleCloseModal} 
        />
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

export default Apointment;
