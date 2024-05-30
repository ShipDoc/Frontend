import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Content from '../../components/insurance/ContentFAQ1';
import styled from 'styled-components';
import chatFixed from "../../assets/images/chat/chatFixed.svg";
import { useNavigate } from 'react-router-dom';


const InsuranceQna1 = () => {
  const navigate=useNavigate();
  const handleChatClick = () => {
    navigate("/chat");
  };
  return (
    <PageContainer>
      <NavBar activeIndex={2}>
        보험청구 &gt; 실손보험 청구 어디서 간단하게 신청할 수 있나요?
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

export default InsuranceQna1;
