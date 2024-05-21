import styled from "styled-components";
import HamburgerDiv from "../../assets/images/hamburgerdiv.svg";
import hamburger from "../../assets/images/hamburger.svg";
import locationBoxImg from "../../assets/images/locationBox.svg";
import locationImg from "../../assets/images/locationImg.svg";
import { useState } from "react";

const FooterWrapper = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(46, 126, 243, 0.88) 0%, #7BB8F0 100%);
  margin-top: 3vh;
`

const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NearHospitalText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const HamburgerContainer = styled.div`
  position: relative;
  width: max-content;
`

const LocationDiv = styled.div`
  position: relative;
  width: max-content;
`

const LocationText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;  
`

export default function MainFooter() {
  const [location, setLocation] = useState("지역");
  return (
    <FooterWrapper>
      <FooterContainer>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1vw"}}>
            <NearHospitalText>내 주변 병원</NearHospitalText>
            <HamburgerContainer>
              <img src={HamburgerDiv} alt="hamburgerDiv" />
              <img src={hamburger} alt="hamburger" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)" }} />
            </HamburgerContainer>
          </div>
          <LocationDiv>
            <img src={locationBoxImg} alt="locationBoxImg"/>
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -60%)", width: "100%"}}>
              <img src={locationImg} alt="locationImg" />
              <LocationText>{location}</LocationText>
            </div>
          </LocationDiv>
        </div>
      </FooterContainer>
    </FooterWrapper>
  )
}