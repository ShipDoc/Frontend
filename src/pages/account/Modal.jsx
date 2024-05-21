import React from "react";
import styled from "styled-components";

const Modal = ({ title, onClose, children }) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <CloseButton onClick={onClose}>X</CloseButton>
                </ModalHeader>
                <StyledHr></StyledHr>
                <ModalContent>{children}</ModalContent>
            </ModalContainer>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    width: 25rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem 0rem 1.7rem;
    align-items: center;
    margin-bottom: 10px;
`;

const ModalTitle = styled.h2`
    font-size: 1rem;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 800;
`;

const ModalContent = styled.div`
    font-size: 0.8rem;
    padding: 1.2rem 1rem 3rem 1.7rem;
`;

const StyledHr = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #878787;
`;

export default Modal;
