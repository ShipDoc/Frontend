import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import { useNavigate, useLocation } from "react-router-dom";
import SearchFooterSymptom from "../../components/searchHospital/SearchFooterSymptom";
import chatFixed from "../../assets/images/chat/chatFixed.svg";

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

const ChatFixed = styled.img`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  z-index: 1000;
`;

export default function SearchHospitalBySymptomDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSymptoms } = location.state || {};

  const handleGotoHome = () => {
    navigate("/home");
  };

  const handleChatClick = () => {
    navigate("/chat");
  };

  return (
    <>
      <NavBar activeIndex={0}>
        <PageDetailTextContainer>
          <img src={blueBackImg} alt="blueBackImg" onClick={handleGotoHome} />
          <PageDetailText>홈 &gt; 증상으로 병원찾기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <SearchFooterSymptom symptoms={selectedSymptoms} />
      <ChatFixed src={chatFixed} alt="Chat" onClick={handleChatClick} />
    </>
  );
}
