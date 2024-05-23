import styled, {css} from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

export default function CategoryButtonComponent() {
  const [selectedButton, setSelectedButton] = useState("홈");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPage = location.pathname === "/Home" ? "홈" : 
                        location.pathname === "/HealthCare" ? "건강검진" : 
                        // location.pathname === "/Insurance" ? "보험청구" : 
                        "홈";
    setSelectedButton(currentPage);
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/Home");
  }

  const handleGoHealthCare = () => {
    navigate("/HealthCare");
  }

  const handleGoInsurance = () => {
    navigate("/Home");
  }

  const handleGoCommunity = () => {
    navigate("/Home");
  }

  return (
    <>
      <CategoryButtonContainer>
        <CategoryButtonBox>
          <CategoryButton onClick={handleGoHome} checked={selectedButton === "홈"} >홈</CategoryButton>
          <CategoryButton onClick={handleGoHealthCare} checked={selectedButton === "건강검진"} >건강검진</CategoryButton>
          <CategoryButton onClick={handleGoInsurance} checked={selectedButton === "보험청구"} >보험청구</CategoryButton>
          <CategoryButton onClick={handleGoCommunity} checked={selectedButton === "커뮤니티"} >커뮤니티</CategoryButton>
        </CategoryButtonBox>
      </CategoryButtonContainer>
    </>
  )
}