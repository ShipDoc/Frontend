import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SymptomContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const SymptomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SymptomTextButton = styled.button`
  border-radius: 0.9375rem;
  border: 1px solid #979797;
  background: ${({ isSelected }) => (isSelected ? "var(--Primary-color, #1371FF)" : "none")};
  padding: 1vh 2vw;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "#FFF" : "#979797")};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background: var(--Primary-color, #1371FF);
    color: #FFF;
  }
`;

const SymptomComponent = ({ setSymptomSelected }) => {
  const [selectedSymptom, setSelectedSymptom] = useState(() => {
    return localStorage.getItem("selectedSymptom") || "";
  });

  useEffect(() => {
    localStorage.setItem("selectedSymptom", selectedSymptom);
    setSymptomSelected(selectedSymptom);
  }, [selectedSymptom, setSymptomSelected]);

  const symptoms = [
    ["어지러움", "설사", "배 통증", "두통", "귀 통증"],
    ["손가락 통증", "손가락 통증", "눈 떨림", "콧물", "어깨 통증"],
    ["발열", "화상", "몸살"],
  ];

  const handleButtonClick = (symptom) => {
    if (selectedSymptom === symptom) {
      setSelectedSymptom(""); // 이미 선택된 버튼을 다시 클릭하면 선택 해제
    } else {
      setSelectedSymptom(symptom);
    }
  };

  return (
    <SymptomContainer>
      {symptoms.map((symptomRow, rowIndex) => (
        <SymptomBox key={rowIndex}>
          {symptomRow.map((symptom) => (
            <SymptomTextButton
              key={symptom}
              isSelected={selectedSymptom === symptom}
              onClick={() => handleButtonClick(symptom)}
            >
              {symptom}
            </SymptomTextButton>
          ))}
        </SymptomBox>
      ))}
    </SymptomContainer>
  );
};

export default SymptomComponent;
