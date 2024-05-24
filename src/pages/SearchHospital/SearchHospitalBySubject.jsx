import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import stethoschpeImg from "../../assets/images/blueStethoscope.svg";
import SearchHospitalText from "../../components/searchHospital/SearchHospitaText";


const PageDetailTextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

const PageDetailText = styled.p`
  color: #A3A3A3;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const WrapperDiv = styled.div`
  position: relative;
  width: 50vw;
  margin: 0 auto;
`

export default function SearchHospitalBySubject() {
  return (
    <>
      <NavBar>
        <PageDetailTextContainer>
          <img src={blueBackImg} alt="blueBackImg" />
          <PageDetailText>홈 &gt; 진료과목으로 병원찾기</PageDetailText>
        </PageDetailTextContainer>
      </NavBar>
      <WrapperDiv>
        <SearchHospitalText text="진료과목으로 병원 찾기" src={stethoschpeImg} />
      </WrapperDiv>
    </>
  );
}
