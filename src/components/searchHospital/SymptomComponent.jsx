import styled from "styled-components";

const SymptomContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`

const SymptomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const SymptomTextButton = styled.button`
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

export default function SymptomComponent() { 
  return (
    <>
      <SymptomContainer>
        <SymptomBox>
          <SymptomTextButton>정형외과</SymptomTextButton>
          <SymptomTextButton>설사</SymptomTextButton>
          <SymptomTextButton>배 통증</SymptomTextButton>
          <SymptomTextButton>두통</SymptomTextButton>
          <SymptomTextButton>귀 통증</SymptomTextButton>
        </SymptomBox>
        <SymptomBox>
          <SymptomTextButton>손가락 통증</SymptomTextButton>
          <SymptomTextButton>손가락 통증</SymptomTextButton>
          <SymptomTextButton>눈 떨림</SymptomTextButton>
          <SymptomTextButton>발 열</SymptomTextButton>
          <SymptomTextButton>어깨 통증</SymptomTextButton>
        </SymptomBox>
        <SymptomBox>
          <SymptomTextButton>눈 떨림</SymptomTextButton>
          <SymptomTextButton>눈 떨림</SymptomTextButton>
        </SymptomBox>
      </SymptomContainer>
    </>
  )
}