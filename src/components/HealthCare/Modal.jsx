import React from 'react';
import styled from 'styled-components';
import xicon from "../../assets/icons/Xicon.svg";


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
    background: white;
    padding-top: 1rem;
    border-radius: 10px;
    width: 30vw;
    box-shadow: 1px 1px 40px 0px rgba(0, 0, 0, 0.35);
    z-index: 1001;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`;

const ModalTitle = styled.p`
  margin-left: 1.5rem;
  font-size: 1rem;
  font-family: "Noto Sans KR";
  color: #000;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e6e5eb;
  margin: 0;
`;

const ModalText = styled.p`
  font-size: 0.8rem;
  font-family: "Noto Sans KR";
  color: #000;
  font-weight: 500;
  line-height: normal;
  margin: 1.5rem;
`;

const CloseIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const Modal = ({ show, handleClose, title, text }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <CloseButton onClick={handleClose}>
                <CloseIcon src={xicon} alt="Close" />
            </CloseButton>
          </ModalHeader>
          <HorizontalLine />
          <ModalText>{text}</ModalText>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

