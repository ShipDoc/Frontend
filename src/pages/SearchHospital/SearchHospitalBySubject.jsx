import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import blueBackImg from "../../assets/images/blueBack.svg";
import stethoschpeImg from "../../assets/images/blueStethoscope.svg";
import SearchHospitalText from "../../components/searchHospital/SearchHospitaText";
import SubjectComponent from "../../components/searchHospital/SubjectComponent";
import { useNavigate } from "react-router-dom";


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

const SearchButton = styled.button`
  margin: 0 auto;
  margin-top: 20vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: var(--Primary-color, #1371FF);
  color: #FFF;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 90%;
  height: 5vh;
`

export default function SearchHospitalBySubject() {
  const navigate = useNavigate();

  const handleSearchHospital = () => {
    navigate("/SearchHospital");
  }

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
        <SubjectComponent />
        <SearchButton onClick={handleSearchHospital}>검색</SearchButton>
      </WrapperDiv>
    </>
  );
}
