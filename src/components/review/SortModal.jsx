import React from 'react';
import styled from 'styled-components';
import dropdownImg from "../../assets/images/dropdown.svg";

const ModalContainer = styled.div`
  border-radius: 0.6875rem;
  border: 1px solid var(--Sub-color, #E6E5EB);
  background: #FFF;
  width: 18vw;
`;

const ModalTextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1vh 0 1vh 1.05rem;
  position: relative;
  &:not(:first-child) {
    border-top: 1px solid var(--Sub-color, #E6E5EB);
  }
  cursor: pointer;
`;

const ModalText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 175%;
`;

const DropdownImg = styled.img`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
`;

export default function SortModal({ onSelect }) {
  const options = ["최신 순", "추천 많은 순", "별점 높은 순", "별점 낮은 순"];

  return (
    <ModalContainer>
      <ModalTextContainer>
        <ModalText>어떤 기준으로 정렬할까요?</ModalText>
        <DropdownImg src={dropdownImg} alt="dropdownImg" />
      </ModalTextContainer>
      {options.map((option) => (
        <ModalTextContainer key={option} onClick={() => onSelect(option)}>
          <ModalText>{option}</ModalText>
        </ModalTextContainer>
      ))}
    </ModalContainer>
  );
}
