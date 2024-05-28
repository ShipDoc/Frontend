import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import SubjectComponent from "../../components/searchHospital/SubjectComponent";
import { useNavigate } from "react-router-dom";

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
  background: ${({ isSelected }) => (isSelected ? "#1371FF" : "#656565")};
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 90%;
  height: 7vh;
  cursor: ${({ isSelected }) => (isSelected ? "pointer" : "not-allowed")};
`;

export default function SearchHospitalBySubject() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const navigate = useNavigate();

  const handleSearchHospital = () => {
    if (selectedSubject) {
      navigate(`/SearchHospitalBySubject/Detail?keyword=${selectedSubject}`, { state: { selectedSubject } });
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
          <PageDetailText>홈 &gt; 진료과목으로 병원찾기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <WrapperDiv>
        <SubjectComponent onSubjectSelect={setSelectedSubject} />
        <SearchButton onClick={handleSearchHospital} isSelected={!!selectedSubject}>
          검색
        </SearchButton>
      </WrapperDiv>
    </>
  );
}
