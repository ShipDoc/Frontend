import CategoryComponent from "./CategoryComponent";
import SearchBar from "./SearchBar";
import CategoryDetailComponent from "./CategoryDetailComponent";
import MainFooter from "../../components/Main/MainFooter";
import styled, {css} from "styled-components";
import { useState } from "react";

const CategoryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  position: relative;
  z-index: 10;
`

const CategoryButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4vw;
  width: 40vw;
`

const CategoryButton = styled.button`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: none;
  cursor: pointer;
  color: #4F4F4F;

  ${({checked}) => 
    checked && 
    css `border-radius: 0.69644rem; background: #1371FF; color: #fff; padding: 0.5vw`};
`

const WrapperDiv = styled.div`
  position: relative;
`

const BlueCircle = styled.div`
  width: 18rem;
  height: 18rem;
  flex-shrink: 0;
  border-radius: 16.625rem;
  background: #E7F3FF;
  z-index: -10;
  position: absolute;
  top: -5vh;
  left: 25vw;

  @media(max-width: 1200px) {
    width: 15rem;
    height: 15rem;
    left: 24vw;
  }

  @media(max-width: 800px) {
    width: 13rem;
    height: 13rem;
    left: 17vw;
  }
`

export default function MainSection() {
  const [selectedButton, setSelectedButton] = useState("홈");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <WrapperDiv>
        <CategoryButtonContainer>
          <CategoryButtonBox>
            <CategoryButton onClick={()=>handleClick("홈")} checked={selectedButton === "홈"} >홈</CategoryButton>
            <CategoryButton onClick={()=>handleClick("건강검진")} checked={selectedButton === "건강검진"} >건강검진</CategoryButton>
            <CategoryButton onClick={()=>handleClick("보험청구")} checked={selectedButton === "보험청구"} >보험청구</CategoryButton>
            <CategoryButton onClick={()=>handleClick("커뮤니티")} checked={selectedButton === "커뮤니티"} >커뮤니티</CategoryButton>
          </CategoryButtonBox>
        </CategoryButtonContainer>
        <SearchBar placeholder="어디가 아프신가요?" />
        <CategoryComponent home={selectedButton === "홈"} checkup={selectedButton === "건강검진"} />
        <BlueCircle />
      </WrapperDiv>
      <CategoryDetailComponent home={selectedButton === "홈"} checkup={selectedButton === "건강검진"} />
      <MainFooter checkup={selectedButton === "건강검진"} />
    </>
  )
}