import styled from "styled-components"

const BannerContainer = styled.div`
  margin: 0 auto;
  width: 60vw;
  height: 20vh;
  margin-top: 2vh;
  z-index: 10;
  position: relative;
`

const BannerBox = styled.div `
  border: 1px solid #A8A8A8;
  background: #E4E4E4;
  width: 100%;
  height: 100%;
`

export default function Banner() {
  return (
    <>
      <BannerContainer>
        <BannerBox />
      </BannerContainer>
    </>
  )
}