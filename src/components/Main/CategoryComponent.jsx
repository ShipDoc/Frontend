import styled from "styled-components";
import characterImg from "../../assets/images/ShipDocCharacter.png";
import chatImg from "../../assets/images/chatImg.svg";
import whiteHalfCircleImg from "../../assets/images/whiteHalfCircle.svg";
import heartImg from "../../assets/images/heart.svg";
import cowboyImg from "../../assets/images/cowboy.svg";

const ChattingContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`

const ChattingBox = styled.div`
  width:40vw;
  height: 18vh;
  border-radius: 1.48319rem;
  background: linear-gradient(180deg, #488EF5 0%, #7AB7F0 100%);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.50);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HelpText = styled.p`
  color: var(--Sub-color, #FFF);
  font-family: Pretendard;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 800;
  line-height: 155%; /* 1.64688rem */
`

const GoChatButtonBox = styled.div`
  width: 18vw;
  height: 5vh;
  border-radius: 0.6875rem;
  background: var(--Sub-color, #FFF);
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ChatText = styled.p`
  color: var(--Primary-color, #1371FF);
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 175%; /* 1.09375rem */
`

const CharacterImgContainer = styled.div`
  position: relative;
  // width: max-content;
  width: 25%;
  height: 100%;
`

const CharacterBackground = styled.img`
  position: absolute;
  bottom: 0;
`

const CharacterImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 5%;
  // transform: translateX(-30%);
`

const HealthInsuranceContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`

const HealthInsuranceBox = styled.div`
  width:40vw;
  height: 18vh;
  border-radius: 2.3125rem;
  background: #1371FF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.50);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const HeartImgContainer = styled.div`
  width: max-content;
  position: relative;
`

const HeartImg = styled.img`
  z-index: 5;
`

const CowboyImg = styled.img`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const HealthInsuranceText = styled.p`
  color: #FFF;
  text-align: center;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const BoldHealthInsuranceText = styled.p`
  color: #FFF;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: inline;
`

export default function CategoryComponent({home, checkup}) {
  return (
    <>
      {home && (
      <ChattingContainer>
        <ChattingBox>
          <CharacterImgContainer>
            <CharacterBackground src={whiteHalfCircleImg} alt="whiteHalfCircleImg" />
            <CharacterImg src={characterImg} alt="characterImg" />
          </CharacterImgContainer>
          <TextContainer>
            <HelpText>무엇이든지 물어보세요! <br/> 도와줘요 쉽닥!</HelpText>
            <GoChatButtonBox>
              <img src={chatImg} alt="chatImg" />
              <ChatText>1 : 1 상담 채팅 봇 바로가기</ChatText>
            </GoChatButtonBox>
          </TextContainer>
        </ChattingBox>
      </ChattingContainer>
      )}
      {checkup && (
        <HealthInsuranceContainer>
          <HealthInsuranceBox>
            <HeartImgContainer>
              <HeartImg src={heartImg} alt="heartImg" />
              <CowboyImg src={cowboyImg} alt="cowboyImg" />
            </HeartImgContainer>
            <div>
              <HealthInsuranceText>나의 올해 국가건강검진 <br /> 목록 보기 <BoldHealthInsuranceText>'국민건강보험'</BoldHealthInsuranceText></HealthInsuranceText>
            </div>
          </HealthInsuranceBox>
        </HealthInsuranceContainer>
      )}
    </>
  )
}