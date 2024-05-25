import React from "react";
import styled from "styled-components";
import chatBanner from "../../assets/images/chat/chatBanner.svg";
import chatProfile from "../../assets/images/chat/chatProfile.svg";
import text from "../../assets/images/chat/text.svg";
import sendBtn from "../../assets/images/chat/sendBtn.svg";
import NavBar from "../../components/NavBar/NavBar";

const Chat = () => {
    return (
        <>
            <NavBar activeIndex={0}>
                <GeneralContainer>
                    <PathText>홈 &gt; 도와줘요 쉽닥!</PathText>
                </GeneralContainer>
            </NavBar>
            <Frame>
                <Div>
                    <BannerImg src={chatBanner}></BannerImg>
                    <ChatFrame>
                        <ProfileImg src={chatProfile}></ProfileImg>
                        <TextContainer src={text}>
                            <TextContent>
                                여기에 채팅 텍스트를 입력하세요여기에 채팅
                                텍스트를 입력하세요여기에 채팅 텍스트를
                                입력하세요여기에 채팅 텍스트를 입력하세요여기에
                                채팅 텍스트를 입력하세요여기에 채팅 텍스트를
                                입력하세요여기에 채팅 텍스트를 입력하세요여기에
                                채팅 텍스트를 입력하세요여기에 채팅 텍스트를
                                입력하세요여기에 채팅 텍스트를 입력하세요여기에
                                채팅 텍스트를 입력하세요여기에 채팅 텍스트를
                                입력하세요여기에 채팅 텍스트를 입력하세요여기에
                                채팅 텍스트를 입력하세요
                            </TextContent>
                        </TextContainer>
                    </ChatFrame>

                    <InputDiv>
                        <InputComp></InputComp>
                        <InputImg src={sendBtn}></InputImg>
                    </InputDiv>
                </Div>
            </Frame>
        </>
    );
};

const Frame = styled.div`
    font-family: Pretendard;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
`;

const Div = styled.div`
    text-align: center;
    width: 42rem;
    padding: 1rem 1rem 4rem 1rem;
`;

const StyledHr = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #e6e5eb;
    margin: 1.6rem 0;
`;

const GeneralContainer = styled.div`
    text-align: start;
    margin-left: 1rem;
    align-items: center;
`;

const PathText = styled.div`
    color: #808080;
    font-size: 0.75rem;
    margin-left: 9rem;
    margin-bottom: 1rem;
`;

const BannerImg = styled.img`
    width: 100%; // 부모 요소의 너비에 맞춤
    max-width: 42rem; // 최대 너비 제한
    height: auto; // 비율 유지를 위해 높이를 auto로 설정
    object-fit: contain; // 컨테이너 내에서 이미지 전체를 보여줌
    margin-bottom: 2rem;
`;

const ChatFrame = styled.div`
    display: flex;
    align-items: center;
`;

const ProfileImg = styled.img`
    margin-right: 1rem;
`;

// const TextContainer = styled.div`
//     width: 100%;
//     max-width: 42rem;
//     position: relative;
//     padding: 2rem; // 필요에 따라 패딩 조정
// `;

const TextContainer = styled.div`
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column; // flex 항목들을 세로로 배열
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto; // 높이를 auto로 설정하여 내용물에 맞게 조절
    min-height: 50px; // 최소 높이 설정
    word-wrap: break-word; // 긴 단어가 있을 경우 줄바꿈
`;

const TextImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: -1; // 텍스트보다 뒤에 위치하게 함
`;

const TextContent = styled.div`
    color: #000; // 텍스트 색상 설정
    font-size: 1rem; // 폰트 크기 설정
    text-align: start;
    width: 100%;
    padding: 10px 20px 10px 40px;
`;

const InputDiv = styled.div`
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 50%;
    bottom: 2rem; // 화면 하단에서 얼마나 떨어지게 할지 설정
    transform: translateX(-50%); // 가로 중앙 정렬을 위해 X축 기준으로 -50% 이동

    z-index: 100;
    border: 0.08rem solid #c8c8cc;
    border-radius: 16px;
    width: 90%; // 기본 너비를 90%로 설정하여 대부분의 화면에서 적절한 너비 유지
    max-width: 40rem; // 너무 큰 화면에서는 너비가 40rem을 초과하지 않도록 설정
    height: 3rem;

    @media (max-width: 768px) {
        width: 95%; // 화면이 768px 이하일 때 너비를 95%로 조정
    }
`;

const InputComp = styled.input`
    margin-left: 1rem;
    width: 100%;
    height: 100%;
`;

const InputImg = styled.img`
    cursor: pointer;

    margin: 0 1rem;
`;

export default Chat;
