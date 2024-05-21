import styled from "styled-components";
import stethoscopeImg from "../../assets/images/stethoscope.svg";
import coldImg from "../../assets/images/cold.svg";

const SearchHospitalButtonConatiner = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`

const SearchHospitalButtonBox = styled.div`
  width: 19vw;
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1.5rem;
  background: #1371FF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
` 

const SearchHospitalBoldText = styled.p`
  color: #FFF;
  text-align: center;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 1.5rem */
`

const SearchHospitalText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  display: inline;
`

export default function SearchHospitalComponent() {
  return (
    <SearchHospitalButtonConatiner>
      <SearchHospitalButtonBox>
        <img src={stethoscopeImg} alt="stethoscopeImg" />
        <SearchHospitalBoldText>진료과목<SearchHospitalText>으로 <br />병원찾기</SearchHospitalText></SearchHospitalBoldText>
      </SearchHospitalButtonBox>

      <SearchHospitalButtonBox>
        <img src={coldImg} alt="coldImg" />
        <SearchHospitalBoldText>증상<SearchHospitalText>으로 <br />병원찾기</SearchHospitalText></SearchHospitalBoldText>
      </SearchHospitalButtonBox>
    </SearchHospitalButtonConatiner>
  )
}