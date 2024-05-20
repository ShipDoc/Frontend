import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import ChattingBotComponent from "./ChattingBotComponent";
import SearchBar from "./SearchBar";
import SearchHospitalComponent from "./SearchHospitalComponent";

const WrapperDiv = styled.div`
  position: relative;
`

const BlueCircle = styled.div`
  width: 18rem;
  height: 18rem;
  flex-shrink: 0;
  border-radius: 16.625rem;
  background: #E7F3FF;
  z-index; -10;
  position: absolute;
  top: -5vh;
  left: 25vw;

  @media(max-width: 1200px) {
    width: 15rem;
    height: 15rem;
    left: 24vw;
  }

  @media(max-width: 800px) {
    width: 13rem;
    height: 13rem;
    left: 17vw;
  }
`

export default function MainSection() {
  return (
    <>
      <WrapperDiv>
        <CategoryButton />
        <SearchBar />
        <ChattingBotComponent />
        <BlueCircle />
      </WrapperDiv>
      <SearchHospitalComponent />
    </>
  )
}