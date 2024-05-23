// Button.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonItem from '../ButtonItem';
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
  font-family: Pretendard;
  align-items: center;
  margin-bottom: 10rem;
`;

const ClickableButtonItem = styled.div`
  cursor: pointer;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const AddButton = styled.button`
  margin-top: 20px;
`;

const Button = () => {
  const navigate = useNavigate();
  
  const [buttonData, setButtonData] = useState([
    {
      name: "김아현",
      hospital: "연세이빈후과의원",
      date: "2024. 05. 07 화요일 10:00",
      min: "10"
    },
    {
      name: "김레오",
      hospital: "연세이빈후과의원",
      date: "2024. 05. 07 화요일 10:00",
      min: "10"
    },
  ]);

  const handleButtonClick = () => {
    navigate("detail");
  };


  // *****나중에 추가 삭제...
  const handleAddButton = () => {
    const newButton = {
      name: "새로운 이름",
      hospital: "새로운 병원",
      date: "새로운 날짜",
      min: "새로운 대기시간"
    };
    setButtonData([...buttonData, newButton]);
  };
  // 삭제
  const handleDeleteButton = (index) => {
    const newData = buttonData.filter((_, i) => i !== index);
    setButtonData(newData);
  };

  return (
    <div>
      <ButtonContainer>
        {buttonData.map((button, index) => (
          <ClickableButtonItem key={index} onClick={handleButtonClick}>
            <ButtonItem
              name={button.name}
              hospital={button.hospital}
              date={button.date}
              ment="예상 대기시간"
              min={`${button.min}분`}
            />
          </ClickableButtonItem>
        ))}
      </ButtonContainer>
    </div>
  );
};

export default Button;