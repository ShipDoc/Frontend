import styled from "styled-components"

const BannerContainer = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 20vh;
  margin-top: 2vh;
`

const BannerBox = styled.div `
  background: #A8A8A8;
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