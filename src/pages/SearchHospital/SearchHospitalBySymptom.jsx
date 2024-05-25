import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import SearchHospitalText from "../../components/searchHospital/SearchHospitaText";
import symptomImg from "../../assets/images/symptom.svg";
import SymptomComponent from "../../components/searchHospital/SymptomComponent";
import { useNavigate } from "react-router-dom";

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

const WrapperDiv = styled.div`
  position: relative;
  width: 50vw;
  margin: 0 auto;
`;

const SearchButton = styled.button`
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: ${({ isSymptomSelected }) => (isSymptomSelected ? "#1371FF" : "#656565")};
  color: #FFF;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 90%;
  height: 7vh;
  cursor: ${({ isSymptomSelected }) => (isSymptomSelected ? "pointer" : "default")};
`;

export default function SearchHospitalBySymptom() {
  const [isSymptomSelected, setIsSymptomSelected] = useState(false);
  const navigate = useNavigate();

  const handleSearchHospital = () => {
    if (isSymptomSelected) {
      navigate("/SearchHospital");
    }
  };

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
      <WrapperDiv>
        <SearchHospitalText text="증상으로 병원 찾기" src={symptomImg} />
        <SymptomComponent setSymptomSelected={setIsSymptomSelected} />
        <SearchButton onClick={handleSearchHospital} isSymptomSelected={isSymptomSelected}>검색</SearchButton>
      </WrapperDiv>
    </>
  );
}
