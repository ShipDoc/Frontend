import styled from "styled-components";
import characterImg from "../../assets/images/ShipDocCharacter.png";
import chatImg from "../../assets/images/chatImg.svg";

const ChattingContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChattingBox = styled.div`
  width:40vw;
  height: 15vh;
  border-radius: 1.48319rem;
  background: linear-gradient(180deg, #488EF5 0%, #7AB7F0 100%);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.50);
  display: flex;
  justify-content: space-around;
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

export default function ChattingBotComponent() {
  return (
    <>
      <ChattingContainer>
        <ChattingBox>
          <img src={characterImg} alt="characterImg" />
          <TextContainer>
            <HelpText>무엇이든지 물어보세요! <br/> 도와줘요 쉽닥!</HelpText>
            <GoChatButtonBox>
              <img src={chatImg} alt="chatImg" />
              <ChatText>1 : 1 상담 채팅 봇 바로가기</ChatText>
            </GoChatButtonBox>
          </TextContainer>
        </ChattingBox>
      </ChattingContainer>
    </>
  )
}