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

const Button = ({ consultations }) => {
  const navigate = useNavigate();

  const handleButtonClick = (consultationId) => {
    navigate("/mypage/history/detail", { state: { consultationId } });
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
        {consultations.map((consultation, index) => (
          <ClickableButtonItem key={index} onClick={() => handleButtonClick(consultation.id)}>
            <ButtonItem
              name={consultation.patientName}
              hospital={consultation.hospitalName}
              date={formatDateTime(consultation.reservationTime)}
            />
          </ClickableButtonItem>
        ))}
      </ButtonContainer>
    </div>
  );
};

export default Button;
