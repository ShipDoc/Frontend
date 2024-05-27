import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import { useNavigate, useLocation } from "react-router-dom";
import SearchFooterSymptom from "../../components/searchHospital/SearchFooterSymptom";

const PageDetailTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const PageDetailText = styled.p`
  color: #a3a3a3;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default function SearchHospitalBySymptomDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSymptom } = location.state || {};

  const handleGotoHome = () => {
    navigate("/home");
  };

  return (
    <>
      <NavBar activeIndex={0}>
        <PageDetailTextContainer>
          <img src={blueBackImg} alt="blueBackImg" onClick={handleGotoHome} />
          <PageDetailText>홈 &gt; 증상으로 병원찾기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <SearchFooterSymptom symptom={selectedSymptom} />
    </>
  );
}
