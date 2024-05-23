import React, {useState} from 'react';
import styled from 'styled-components';
import ButtonItem from '../ButtonItem';
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("김아현");
  const [hospital, setHospital] = useState("연세이빈후과의원");
  const [date, setDate] = useState("2024. 05. 07 화요일 10:00");
  const [min, setMin] = useState("10");

  const handleButton1 = () => {
    navigate("detail");
  };

  return (
    <ButtonContainer>
      <ClickableButtonItem onClick={handleButton1}>
        <ButtonItem
          name={name}
          hospital={hospital}
          date={date}
          ment="예상 대기시간"
          min={`${min}분`}
        />
        <ButtonItem
          name={name}
          hospital={hospital}
          date={date}
          ment="예상 대기시간"
          min={`${min}분`}
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
