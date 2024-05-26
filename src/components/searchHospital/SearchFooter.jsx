import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import locationBoxImgBlue from "../../assets/images/locationBoxImgblue.svg";
import locationImgBlue from "../../assets/images/locationImgBlue.svg";
import toggleBoxImage from "../../assets/images/toggleBoxImage.svg";
import HospitalComponent from "./HospitalComponent";
import SortModal from "../Main/SortModal";

const FooterWrapper = styled.div`
  width: 100%;
  background: #FFF;
  margin-top: 7vh;
  margin-bottom: 10vh;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40%;
`;

const NearHospitalText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  span {
    color: #1371FF;
  }
`;

const LocationDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LocationTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const LocationText = styled.p`
  color: #1371ff;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  z-index: 1;
`;

const ToggleDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const ToggleText = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  z-index: 1;
`;

const ToggleIcon = styled.div`
  margin-left: 0.3rem;
  cursor: pointer;
  color: #FFF;
  font-size: 0.75rem;
`;

const PartitionComponent = styled.div`
  height: 0.3vh;
  stroke-width: 2px;
  stroke: #E0E0E0;
  width: 100%;
  background: #E0E0E0;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2vh;
`;

const HospitalListContainer = styled.div`
  width: 100%;
`;

const SearchButton = styled.button`
  background-color: #1371FF;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  border-radius: 20px;
  width: 100%;
  height: 4rem;
  margin-top: 3rem;
  cursor: pointer;
`;

export default function SearchFooter({ checkup }) {
  const location = useLocation();
  const [symptom, setSymptom] = useState("");
  const [modal, setModal] = useState(false);
  const [sortOption, setSortOption] = useState("가까운 순");
  const modalRef = useRef();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get("keyword");
    if (keyword) {
      setSymptom(keyword);
    }
  }, [location.search]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const handleSelectOption = (option) => {
    setSortOption(option);
    setModal(false);
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <SearchHeader>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <NearHospitalText>
              <span>'{symptom}'</span> 관련 병원
            </NearHospitalText>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <LocationDiv>
              <img src={locationBoxImgBlue} alt="locationBoxImg" />
              <LocationTextContainer>
                <img src={locationImgBlue} alt="locationImgBlue" />
                <LocationText>성북구</LocationText>
              </LocationTextContainer>
            </LocationDiv>
            <ToggleDiv>
              <img src={toggleBoxImage} alt="toggleBoxImg" />
              <ToggleTextContainer>
                <ToggleText>{sortOption}</ToggleText>
                <ToggleIcon onClick={toggleModal}>▼</ToggleIcon>
              </ToggleTextContainer>
            </ToggleDiv>
          </div>
          {modal && (
            <div
              ref={modalRef}
              style={{
                position: "absolute",
                top: "6%",
                left: "78%",
                transform: "translate(-50%)",
                zIndex: 10,
              }}
            >
              <SortModal onSelect={handleSelectOption} />
            </div>
          )}
        </SearchHeader>
        <HospitalListContainer>
          <HospitalComponent />
          <PartitionComponent />
          <HospitalComponent />
          <PartitionComponent />
          <HospitalComponent />
        </HospitalListContainer>
        <SearchButton>더보기</SearchButton>
      </FooterContainer>
    </FooterWrapper>
  );
}
