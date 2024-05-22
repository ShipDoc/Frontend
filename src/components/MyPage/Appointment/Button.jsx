import React from 'react';
import styled from 'styled-components';
import ButtonItem from '../ButtonItem';
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleButton1 = () => {
    navigate("Button1");
  };

  return (
    <ButtonContainer>
      <ClickableButtonItem onClick={handleButton1}>
        <ButtonItem
          name="김아현"
          hospital="연세이빈후과의원"
          date="2024. 05. 07 화요일 10:00"
          ment="예상 대기시간"
          min="10분"
        />
        <ButtonItem
          name="김아현"
          hospital="연세이빈후과의원"
          date="2024. 05. 07 화요일 10:00"
          ment="예상 대기시간"
          min="10분"
        />
      </ClickableButtonItem>
      
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  font-family: Pretendard;
  align-item: center;
  margin-bottom: 10rem;
`;

const ClickableButtonItem = styled.div`
  cursor: pointer;
`;

export default Button;
