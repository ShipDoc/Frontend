import styled from "styled-components"
import searchImg from "../../assets/images/searchImg.svg";

const SearchContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  width: 40vw;
  height: 4.5vh;
  border-radius: 4.375rem;
  border: 1px solid #CCC;
  background: #FFF;
  padding-left: 3vw;

  &::placeholder {
    color: #6F6F6F;
    leading-trim: both;
    text-edge: cap;
    font-family: "Noto Sans KR";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 350;
    line-height: 175%; /* 1.53125rem */
  }
`

const SearchImg = styled.img`
  position: absolute;
  right: 2vw;
`

export default function SearchBar() {
  return (
    <SearchContainer>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
        <SearchInput placeholder="어디가 아프신가요?" />
        <SearchImg src={searchImg} alt="searchImg" />
      </div>
    </SearchContainer>
  )
}