import React, { useState } from "react";
import styled from "styled-components";
import chatBanner from "../../assets/images/chat/chatBanner.svg";
import chatProfile from "../../assets/images/chat/chatProfile.svg";
import text from "../../assets/images/chat/text.svg";
import myTextImg from "../../assets/images/chat/myTextImg.svg";
import sendBtn from "../../assets/images/chat/sendBtn.svg";
import NavBar from "../../components/NavBar/NavBar";
import { sendChat } from "../../apis/api/chat";

const Chat = () => {
    const [textInput, setTextInput] = useState("");

    const [allText, setAllText] = useState([]);

    const changeText = (e) => {
        setTextInput(e.target.value);
    };

    const sentMessage = () => {
        // const send = async () => {
        //     try {
        //         const res = await sendChat({ messageSent: textInput });
        //         console.log(res);

        //         if (res.data.code === "COMMON200" || res.data.status === 200) {
        //             const answer = res.data.result;
        //             setAllText([...allText, textInput]);

        //             console.log(answer);
        //         } else {
        //             console.log(res.data.code);
        //         }
        //     } catch (error) {
        //         console.error("Failed to fetch hospital detail:", error);
        //     }
        // };

        // send();
        setAllText([
            ...allText,
            {
                who: true,
                content: textInput,
            },
        ]);

        setTextInput("");
    };

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
                        <TextContainer>
                            <TextContent>
                                안녕하세요!{" "}
                                <span
                                    style={{
                                        color: "#1371FF",
                                        fontWeight: 900,
                                    }}
                                >
                                    AI 도우미 쉽닥
                                </span>
                                입니다. 어떤 걸 도와드릴까요?
                            </TextContent>
                            <LeftCurve />
                        </TextContainer>
                    </ChatFrame>
                    {allText.map((data, idx) => {
                        return (
                            data.who && (
                                <ChatFrame key={idx}>
                                    <MyTextContainer>
                                        <MyTextContent>
                                            {data.content}
                                        </MyTextContent>
                                        <RightCurve />
                                    </MyTextContainer>
                                </ChatFrame>
                            )
                        );
                    })}

                    <InputDiv>
                        <InputComp
                            value={textInput}
                            onChange={changeText}
                        ></InputComp>
                        <InputImg
                            onClick={sentMessage}
                            src={sendBtn}
                        ></InputImg>
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
    width: 100%;
    max-width: 42rem;
    height: auto;
    object-fit: contain;
    margin-bottom: 2rem;
`;

const ChatFrame = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const ProfileImg = styled.img`
    margin-right: 1rem;
`;

const TextContainer = styled.div`
    position: relative;
    display: inline-block;
    max-width: calc(100% - 70px);
    width: 65%;
    padding: 0.8rem 0.1rem;
    margin-top: 1rem;
    border-radius: 15px;
    background: #e6e5eb;
`;

const TextContent = styled.div`
    color: #000;
    font-size: 1rem;
    text-align: start;
    position: relative;
    display: inline-block;
    max-width: calc(100% - 70px);
`;

const LeftCurve = styled.div`
    position: absolute;
    bottom: 0;
    left: -10px;
    height: 100%;
    width: 20px;
    background: #e6e5eb;
    border-bottom-right-radius: 15px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 15px;

        background: #fff;
    }
`;

const MyTextContainer = styled.div`
    position: relative;
    display: inline-block;
    max-width: calc(100% - 70px);
    width: 65%;
    padding: 0.8rem 0;
    margin-top: 1rem;
    border-radius: 15px;
    background: #1371ff;
    margin-left: auto; // 이 부분이 오른쪽 정렬을 담당합니다.
`;

const MyTextContent = styled.div`
    color: #fff;
    font-size: 1rem;
    text-align: start;
    position: relative;
    display: inline-block;
    max-width: calc(100% - 70px);
`;

const RightCurve = styled.div`
    position: absolute;
    bottom: 0;
    right: -10px;
    height: 100%;
    width: 20px;
    background: #1371ff;
    border-bottom-left-radius: 15px;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 15px;
        background: #fff;
    }
`;

const InputDiv = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    z-index: 100;
    border: 0.08rem solid #c8c8cc;
    border-radius: 16px;
    width: 90%;
    max-width: 40rem;
    height: 3rem;

    @media (max-width: 768px) {
        width: 95%;
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
