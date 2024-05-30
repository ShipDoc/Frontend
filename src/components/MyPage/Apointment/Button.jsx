import React from 'react';
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

const Button = ({ reservations }) => {
  const navigate = useNavigate();

  const handleButtonClick = (reservationId) => {
    navigate("/mypage/apointment/detail", { state: { reservationId } });
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      <ButtonContainer>
        {reservations.map((button, index) => (
          <ClickableButtonItem key={index} onClick={() => handleButtonClick(button.id)}>
            <ButtonItem
              name={button.name}
              hospital={button.hospitalName}
              date={formatDateTime(button.reservationTime)}
              ment="예상 대기시간"
              min={`${button.estimatedWaitTime}분`}
            />
          </ClickableButtonItem>
        ))}
      </ButtonContainer>
    </div>
  );
};

export default Button;
