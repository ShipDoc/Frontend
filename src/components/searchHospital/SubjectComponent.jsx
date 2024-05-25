import styled from "styled-components";

const SubjectContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`

const SubjectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const SubjectTextButton = styled.button`
  border-radius: 0.9375rem;
  border: 1px solid #979797;
  background: none;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  padding: 1vh 2vw;
  cursor: pointer;
  color: #979797;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background: var(--Primary-color, #1371FF);
    color: #FFF;
  }
`

export default function SubjectComponent() { 
  return (
    <>
      <SubjectContainer>
        <SubjectBox>
          <SubjectTextButton>외과</SubjectTextButton>
          <SubjectTextButton>내과</SubjectTextButton>
          <SubjectTextButton>이비인후과</SubjectTextButton>
          <SubjectTextButton>소아과</SubjectTextButton>
          <SubjectTextButton>피부과</SubjectTextButton>
        </SubjectBox>
        <SubjectBox>
          <SubjectTextButton>정형외과</SubjectTextButton>
          <SubjectTextButton>신경외과</SubjectTextButton>
          <SubjectTextButton>가정의학과</SubjectTextButton>
          <SubjectTextButton>안과</SubjectTextButton>
          <SubjectTextButton>정신건강의학과</SubjectTextButton>
        </SubjectBox>
        <SubjectBox>
          <SubjectTextButton>산부인과</SubjectTextButton>
          <SubjectTextButton>응급의학과</SubjectTextButton>
          <SubjectTextButton>신경과</SubjectTextButton>
          <SubjectTextButton>비뇨기과</SubjectTextButton>
        </SubjectBox>
      </SubjectContainer>
    </>
  )
}