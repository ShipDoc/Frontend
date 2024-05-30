import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styled from 'styled-components';
import Content from "../../components/MyPage/History/NullContent";
import chatFixed from "../../assets/images/chat/chatFixed.svg";
import { useNavigate } from 'react-router-dom';

const HistoryNull = () => {
  const navigate=useNavigate();
  const handleChatClick = () => {
    navigate("/chat");
  };

  return (
    <PageContainer>
      <NavBar>
      마이페이지 &gt; 진료내역 보기
      </NavBar>
      <Content />
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

export default HistoryNull;
