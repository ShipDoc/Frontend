import styled from "styled-components";
import searchImg from "../../assets/images/searchImg.svg";
import { useEffect, useState } from "react";

const SearchContainer = styled.div`
  width: 100%;
  margin-top: 3vh;
  position: relative;
  z-index: 10;
`

const SearchInput = styled.input`
  width: 100%;
  height: 7vh;
  padding-left: 2vw;
  border-radius: 4.375rem;
  border: 1px solid #CCC;
  background: #FFF;
  box-shadow: 0px 4px 6.6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  &::placeholder {
    color: #6F6F6F;
    leading-trim: both;
    text-edge: cap;
    font-family: "Noto Sans KR";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 350;
    line-height: normal;
  }
`

const SearchImg = styled.img`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
  cursor: pointer;
`

const SearchHistoryContainer = styled.div`
  width: 100%;
  border-radius: 1.4375rem;
  border: 1px solid #B3B3B3;
  position: absolute;
  top: 8vh;
  z-index: 5;
  padding-bottom: 4vh;
`

const SearchHistoryBox = styled.div`
  margin: 0 auto;
  margin-top: 3vh;
  width: 90%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AllClearText = styled.p`
  text-align: right;
  margin: 6vh 4vw 0 0; 
  color: #888;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.015rem;
  cursor: pointer;
`

const SearchHistoryText = styled.p`
  color: #505050;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const DeleteImg = styled.p`
  color: #888;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.015rem;
  cursor: pointer;
`

export default function SearchHospitalInput() {
  const [searchHistory, setSearchHistory] = useState(["두통", "발열"]);
  const [findHospital,setFindHospital] = useState("");

  // 검색기록 기능 구현하기

  return (
    <>
      <SearchContainer>
        <SearchInput placeholder="병원을 입력하세요." value={findHospital} />
        <SearchImg src={searchImg} alt="searchImg" />
      </SearchContainer>
      {searchHistory.length > 0 && 
        <SearchHistoryContainer>
          <AllClearText>전체 삭제</AllClearText>
          {searchHistory.map((item, index) => {
            return (
              <SearchHistoryBox key={index}>
                <SearchHistoryText>{item}</SearchHistoryText>
                <DeleteImg>X</DeleteImg>
              </SearchHistoryBox>
            )
          })}
        </SearchHistoryContainer>}
    </>
  )
}