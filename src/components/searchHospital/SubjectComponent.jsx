import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SubjectContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const SubjectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubjectTextButton = styled.button`
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

const SubjectComponent = ({ onSubjectSelect }) => {
  const [selectedSubject, setSelectedSubject] = useState(() => {
    return localStorage.getItem("selectedSubject") || "";
  });

  useEffect(() => {
    localStorage.setItem("selectedSubject", selectedSubject);
    onSubjectSelect(selectedSubject);
  }, [selectedSubject, onSubjectSelect]);

  const subjects = [
    ["외과", "내과", "이비인후과", "소아과", "피부과"],
    ["정형외과", "신경외과", "가정의학과", "안과", "정신건강의학과"],
    ["응급의학과", "산부인과", "신경과", "비뇨기과"],
  ];

  const handleButtonClick = (subject) => {
    if (selectedSubject === subject) {
      setSelectedSubject(""); // 이미 선택된 버튼을 다시 클릭하면 선택 해제
    } else {
      setSelectedSubject(subject);
    }
  };

  return (
    <SubjectContainer>
      {subjects.map((subjectRow, rowIndex) => (
        <SubjectBox key={rowIndex}>
          {subjectRow.map((subject) => (
            <SubjectTextButton
              key={subject}
              isSelected={selectedSubject === subject}
              onClick={() => handleButtonClick(subject)}
            >
              {subject}
            </SubjectTextButton>
          ))}
        </SubjectBox>
      ))}
    </SubjectContainer>
  );
};

export default SubjectComponent;
