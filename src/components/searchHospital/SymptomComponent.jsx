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

const SymptomComponent = ({ onSubjectSelect }) => {
  const [selectedSymptom, setSelectedSymptom] = useState(() => {
    return localStorage.getItem("selectedSymptom") || "";
  });

  const subjectMap = {
    "두통": "HEADACH",
    "발열": "FEVER",
    "기침": "COUGH",
    "목통증": "SORE_THROAT",
    "메스꺼움": "NAUSEA",
    "피로": "FATIGUE",
    "설사": "DIARRHEA",
    "구토": "VOMITING",
    "어지럼증": "DIZZINESS",
    "흉통": "CHEST_PAIN",
    "호흡곤란": "SHORTNESS_OF_BREATH",
    "복통": "ABDOMINAL_PAIN",
    "발진": "RASH",
    "관절통": "JOINT_PAIN",
    "근육통": "MUSCLE_ACHES",
    "콧물": "RUNNY_NOSE",
    "몸살": "BODY_ACHE",
  };

  useEffect(() => {
    const selectedCategory = subjectMap[selectedSymptom] || "";
    localStorage.setItem("selectedSymptom", selectedSymptom);
    onSubjectSelect(selectedCategory);
  }, [selectedSymptom, onSubjectSelect, subjectMap]);

  const symptoms = [
    ["두통", "발열", "기침", "목통증", "메스꺼움", "피로"],
    ["설사", "구토", "어지럼증", "흉통", "호흡곤란", "복통"],
    ["발진", "관절통", "근육통", "콧물", "몸살"],
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
