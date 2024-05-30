import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import HealthCareRecordList from '../../components/HealthCare/HealthCareRecordList';
import blueBackImg from "../../assets/images/blueBack.svg";
import { useNavigate } from "react-router-dom";
import chatFixed from "../../assets/images/chat/chatFixed.svg";

const HealthCareHistory = () => {
  const navigate = useNavigate();

  const handleGotoHome = () => {
    navigate("/home");
  }
  
  const handleChatClick = () => {
    navigate("/chat");
  };

  return (
    <PageContainer>
      <NavBar activeIndex={1}>
        <PageDetailTextContainer>
          <img src={blueBackImg} alt="blueBackImg" onClick={handleGotoHome} />
          <PageDetailText>홈 &gt; 건강검진 &gt; 건강검진 내역 보기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <ContentContainer>
        <HealthCareRecordList />
        <RegisterButton>가족 등록하기</RegisterButton>
      </ContentContainer>
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

const PageDetailTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PageDetailText = styled.p`
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

const RegisterButton = styled.button`
  background-color: #1371FF;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  border-radius: 20px;
  width: 35vw;
  height: 6rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  cursor: pointer;
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

export default HealthCareHistory;
