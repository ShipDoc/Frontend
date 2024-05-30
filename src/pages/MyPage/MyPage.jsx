import React from 'react';
import styled from 'styled-components';
import MyPageHeader from '../../components/MyPage/MyPageHeader'
import MyPageProfile from '../../components/MyPage/MyPageProfile';
import MyPageMenu from '../../components/MyPage/MyPageMenu';
import MyPageFooter from '../../components/MyPage/MyPageFooter';
import chatFixed from "../../assets/images/chat/chatFixed.svg";
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate=useNavigate();
  const handleChatClick = () => {
    navigate("/chat");
  };

  return (
    <Container>
      <MyPageHeader />
      <MyPageProfile />
      <MyPageMenu />
      <MyPageFooter />
      <ChatFixed src={chatFixed} alt="Chat" onClick={handleChatClick} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  color: black;
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

export default MyPage;