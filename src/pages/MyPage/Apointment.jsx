import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import Content from "../../components/MyPage/Apointment/Content";
import ApointmentCompleteModal from "../../components/MyPage/Apointment/ApointmentCompleteModal";
import { getReservations } from '../../apis/api/reservations';
import { useNavigate } from "react-router-dom";

const Apointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      const data = await getReservations();
      if (data.result === null || data.result.reservations.length === 0) {
        navigate("/mypage/apointmentNull");
      } else {
        setReservations(data.result.reservations);
      }
    };

    fetchReservations();
  }, [navigate]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <NavBar>
        마이페이지 &gt; 병원 예약내역 보기
      </NavBar>
      <Content reservations={reservations} />
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
