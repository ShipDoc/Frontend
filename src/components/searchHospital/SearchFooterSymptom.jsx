import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import { getSymptomList } from "../../apis/api/symptom";
import HospitalComponent from "./HospitalComponent";
import SortModal from "../Main/SortModal";
import locationBoxImgBlue from "../../assets/images/locationBoxImgblue.svg";
import locationImgBlue from "../../assets/images/locationImgBlue.svg";
import toggleBoxImage from "../../assets/images/toggleBoxImage.svg";

const FooterWrapper = styled.div`
  width: 100%;
  background: #fff;
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
    color: #1371ff;
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
  color: #fff;
  font-size: 0.75rem;
`;

const PartitionComponent = styled.div`
  height: 0.3vh;
  stroke-width: 2px;
  stroke: #e0e0e0;
  width: 100%;
  background: #e0e0e0;
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
  background-color: #1371ff;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  border-radius: 20px;
  width: 100%;
  height: 4rem;
  margin-top: 3rem;
  cursor: pointer;
`;

const NoListText = styled.div`
  margin: 7rem 0;
  font-size: 1rem;
  color: #808080;
  font-family: Pretendard;
`;

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

const symptomMap = {
  "HEADACH": "두통",
  "FEVER": "발열",
  "COUGH": "기침",
  "SORE_THROAT": "목통증",
  "NAUSEA": "메스꺼움",
  "FATIGUE": "피로",
  "DIARRHEA": "설사",
  "VOMITING": "구토",
  "DIZZINESS": "어지럼증",
  "CHEST_PAIN": "흉통",
  "SHORTNESS_OF_BREATH": "호흡곤란",
  "ABDOMINAL_PAIN": "복통",
  "RASH": "발진",
  "JOINT_PAIN": "관절통",
  "MUSCLE_ACHES": "근육통",
  "RUNNY_NOSE": "콧물",
  "BODY_ACHE": "몸살",
};

export default function SearchFooterSymptom({ symptoms }) {
  const { location, error } = useGeoLocation(geolocationOptions);
  const [hospitalList, setHospitalList] = useState([]);
  const [modal, setModal] = useState(false);
  const [sortOption, setSortOption] = useState("가까운 순");
  const [size, setSize] = useState(3); // size 상태 추가
  const modalRef = useRef();

  useEffect(() => {
    const fetchHospitalList = async () => {
      if (!location.latitude || !location.longitude || !symptoms || symptoms.length === 0) return;

      const requestData = {
        latitude: 37.589135,
        longitude: 127.2198911,
        size: size,
        symptomList: symptoms,
        sort: "REVIEW",
      };

      console.log("Request Data:", requestData);

      try {
        const res = await getSymptomList(requestData);

        console.log("API Response:", res);

        if (res && res.data && res.data.code === "COMMON200") {
          setHospitalList(res.data.result.hospitalList);
          console.log("Hospital List:", res.data.result.hospitalList);
        } else {
          console.log("Error Code:", res.data ? res.data.code : "No response data");
        }
      } catch (error) {
        console.error("Failed to fetch hospital list:", error);
      }
    };

    fetchHospitalList();
  }, [location, symptoms, sortOption, size]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const handleSelectOption = (option) => {
    setSortOption(option);
    setModal(false);
  };

  const handleLoadMore = () => {
    setSize((prevSize) => prevSize + 3);
  };

  return (
    <FooterWrapper>
      <FooterContainer>
        <SearchHeader>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <NearHospitalText>
              <span>'{symptoms.map(symptom => symptomMap[symptom] || symptom).join(", ")}'</span> 관련 병원
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
          {hospitalList.length > 0 ? (
            hospitalList.map((data, idx) => (
              <HospitalComponent
                key={idx}
                data={data}
              />
            ))
          ) : (
            <NoListText>병원 데이터가 없습니다.</NoListText>
          )}
        </HospitalListContainer>
        <SearchButton onClick={handleLoadMore}>더보기</SearchButton>
      </FooterContainer>
    </FooterWrapper>
  );
}
