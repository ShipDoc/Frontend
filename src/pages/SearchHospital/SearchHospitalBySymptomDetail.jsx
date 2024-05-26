import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import { useNavigate } from "react-router-dom";
import SearchFooter from "../../components/searchHospital/SearchFooter";

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

export default function SearchHospitalBySymptom() {
  const navigate = useNavigate();

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
      <SearchFooter checkup />
    </>
  );
}
