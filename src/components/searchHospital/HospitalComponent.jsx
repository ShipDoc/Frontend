import styled from "styled-components";
import hospitalMarker from "../../assets/icons/hospitalMarker.svg";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import leftImg from "../../assets/images/leftImg.svg";
import rightImg from "../../assets/images/rightImg.svg";
import consulationChatImg from "../../assets/images/consulatoinChatImg.svg";
import { useState } from "react";

const HospitalContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  margin-bottom: 2vh;
`

const HospitalNameText = styled.p`
  margin-left: 0.5rem;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 175%; /* 1.75rem */  
`

const HospitalLocationText = styled.p`
  margin-left: 0.3rem;
  color: #989898;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 175%; /* 1.3125rem */
`

// const HospitalRateStar = styled.

const RateText = styled.p`
  color: #E7E7E7;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 175%;
  margin: 0;
`

const DetailHospitalContainer = styled.div`
  margin-top: 1vh;
  width: 40vw;
  height: 18vh;
  border-radius: 2.0625rem;
  background: #e6e5eb;
  position: relative;
`

const HospitalTagContainer = styled.div`
  margin-top: 1vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5vw;
`

const HospitalTagBox = styled.div`
  border-radius: 0.5625rem;
  border: 1px solid #606060;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.2vw;
`

const HospitalTagText = styled.p`
  color: #606060;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 175%; /* 1.3125rem */
`

const ConsultationButton = styled.div`
  border-radius: 1.0625rem;
  background: var(--Primary-color, #1371FF);
  width: 5vw;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5vw;
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
  // padding: 0 0.2vw;
`

const ConsultationText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// const DetailHospitaComponenet = styled.div` // 사진 담을 컴포넌트

// `


const RateStar = ({filled}) => (
  <img src={filled ? fillRateImg : basicRateImg} alt="rateStar" />
)

const Rating = ({rating}) => {
  const totalStars = 5;
  
  const stars = Array.from( {length: totalStars}, (_, index) => (// _는 값을 사용하지 않기 때문에 _로 표시
      <RateStar key={index} filled={index < rating} />
    )
  );
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {stars}
    </div>
  )
}

export default function HospitalComponent() {
  const [hospitalName, setHospitalName] = useState("병원 이름");
  const [hospitalLocation, setHospitalLocation] = useState("병원 주소");
  const [rateNum, setRateNum] = useState(0); // 나중에 평점 받아오기
  const [hospitalTags, setHospitalTags] = useState(["Test 1", "Test 2", "Test 3"]); // 병원 분류 상태 (백에서 받아오기)

  return (
    <>
      <HospitalContainer>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "2vh"}}>
          <div style={{display: "flex", alignItems: "center", gap: "0.2vw"}}>
            <img src={hospitalMarker} alt="hospitalMarker" />
            <HospitalNameText>{hospitalName}</HospitalNameText>
            <HospitalLocationText>{hospitalLocation}</HospitalLocationText>
          </div>
          <div style={{display: "flex", alignItems: "center", gap: "0.5vw"}}>
            <Rating rating={rateNum} />
            <RateText>{rateNum.toFixed(1)}</RateText>
          </div>
        </div>
        <DetailHospitalContainer>
          <img src={leftImg} alt="leftImg" style={{position: "absolute", top: "50%", left: "2vw", transform: "translate(0, -50%)", cursor: "pointer"}} />
          <img src={rightImg} alt="rightImg" style={{position: "absolute", top: "50%", right: "2vw", transform: "translate(0, -50%)", cursor: "pointer"}} />
          <ConsultationButton>
            <img src={consulationChatImg} alt="consulationChatImg" />
            <ConsultationText>예약하기</ConsultationText>
          </ConsultationButton>
        </DetailHospitalContainer>
        <HospitalTagContainer>
          {hospitalTags.map((text, index) => {
            return (
              <HospitalTagBox key={index}>
                <HospitalTagText>{text}</HospitalTagText>
              </HospitalTagBox>
            )
            })}
        </HospitalTagContainer>
      </HospitalContainer>
    </>
  )
}