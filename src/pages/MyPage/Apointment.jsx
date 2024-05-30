import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import Content from "../../components/MyPage/Apointment/Content";
import ApointmentCompleteModal from "../../components/MyPage/Apointment/ApointmentCompleteModal";
import { getReservations } from '../../apis/api/reservations';
import { useNavigate } from "react-router-dom";
import chatFixed from "../../assets/images/chat/chatFixed.svg";


const Apointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate("/chat");
  };

  const fetchReservations = async () => {
    const data = await getReservations();
    console.log(data);
    if (data.result === null || data.result.reservations.length === 0) {
      navigate("/mypage/apointmentNull");
    } else {
      setReservations(data.result.reservations);
    }
  };

  useEffect(() => {
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
     <ChatFixed src={chatFixed} alt="Chat" onClick={handleChatClick} />
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

const ChatFixed = styled.img`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  z-index: 1000;
`;

export default Apointment;
