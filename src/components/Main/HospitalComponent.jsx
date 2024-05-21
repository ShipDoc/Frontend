import styled from "styled-components";
import placeImg from "../../assets/images/place.svg";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import leftImg from "../../assets/images/leftImg.svg";
import rightImg from "../../assets/images/rightImg.svg";
import { useState } from "react";

const HospitalContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
`

const HospitalNameText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 175%; /* 1.75rem */  
`

const HospitalLocationText = styled.p`
  color: #E7E7E7;
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
  height: 15vh;
  border-radius: 2.0625rem;
  background: #FFF;
  position: relative;
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

  return (
    <>
      <HospitalContainer>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "2vh"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <img src={placeImg} alt="placeImg" />
            <HospitalNameText>{hospitalName}</HospitalNameText>
            <HospitalLocationText>{hospitalLocation}</HospitalLocationText>
          </div>
          <div style={{display: "flex", alignItems: "center", gap: "0.2vw"}}>
            <Rating rating={rateNum} />
            <RateText>{rateNum.toFixed(1)}</RateText>
          </div>
        </div>
        <DetailHospitalContainer>
          <img src={leftImg} alt="leftImg" style={{position: "absolute", top: "50%", left: "2vw", transform: "translate(0, -50%)"}} />
        </DetailHospitalContainer>
      </HospitalContainer>
    </>
  )
}