import { useState } from "react";
import styled, {css} from "styled-components";

const CategoryButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  margin-top: 2vh;
`

const CategoryButton = styled.button`
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: none;

  ${({checked}) => 
    checked && 
    css `border-radius: 0.69644rem; background: #1371FF; color: #fff; padding: 0.5vw`};

  ${({nonChecked}) => 
    nonChecked &&
    css`color: #4F4F4F;`};
`


export default function Category() {
  const [selectedButton, setSelectedButton] = useState("홈");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <CategoryButtonContainer>
      <CategoryButton onClick={()=>handleClick("홈")} checked={selectedButton === "홈"} nonChecked={selectedButton !== "홈"} >홈</CategoryButton>
      <CategoryButton onClick={()=>handleClick("건강검진")} checked={selectedButton === "건강검진"} nonChecked={selectedButton !== "건강검진"} >건강검진</CategoryButton>
      <CategoryButton onClick={()=>handleClick("보험청구")} checked={selectedButton === "보험청구"} nonChecked={selectedButton !== "보험청구"} >보험청구</CategoryButton>
      <CategoryButton onClick={()=>handleClick("커뮤니티")} checked={selectedButton === "커뮤니티"} nonChecked={selectedButton !== "커뮤니티"} >커뮤니티</CategoryButton>
    </CategoryButtonContainer>
  )
}