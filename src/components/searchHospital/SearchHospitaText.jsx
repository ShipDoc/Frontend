import styled from "styled-components";

const SearchHospitalTextContainer = styled.div`
  margin-top: 3vh;
  // margin-left: 4vw;
  height: max-content;
  position: relative;
  width: max-content;
  z-index: 10;
`

const SearchText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  z-index: 10;
`

const SearchHospitalImg = styled.img`
  z-index: -10;
  position: absolute;
  right: -35%;
  transform: translate(0 ,-50%);
`

export default function SearchHospitalText({text, src}) {
  return (
    <>
      <SearchHospitalTextContainer>
        <SearchHospitalImg src={src} />
        <SearchText>{text}</SearchText>
      </SearchHospitalTextContainer>
    </>
  )
}