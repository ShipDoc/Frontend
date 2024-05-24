import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0px 0px 45.542px 0px rgba(0, 0, 0, 0.35);
  z-index: 1001;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ModalText = styled.p`
  font-size: 0.8rem;
  font-family: "Noto Sans KR";
  margin-bottom: 2rem;
  color: #000;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  leading-trim: both;
  text-edge: cap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;

const CancelButton = styled.button`
  display: flex;
  background: #fff;
  border: 0.1rem solid #747474;
  padding: 10px 20px;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  display: flex;
  background: #747474;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 0.3rem;
  cursor: pointer;
`;

const Modal = ({ show, handleClose, handleConfirm }) => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    handleConfirm();
    navigate("/mypage/apointment", { state: { showModal: true } });
  };

  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <ModalText>예약을 취소하시겠습니까?</ModalText>
          <ButtonContainer>
            <CancelButton onClick={handleClose}>취소</CancelButton>
            <ConfirmButton onClick={handleConfirmClick}>확인</ConfirmButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
