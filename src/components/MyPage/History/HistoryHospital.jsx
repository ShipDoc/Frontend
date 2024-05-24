import React, { useState } from "react";
import styled from "styled-components";
import MainItem from "./MainItem";
import { BsFillTelephoneFill } from "react-icons/bs";
import hospitalMaeker from "../../../assets/icons/hospitalMarker.svg";
import virticalLine from "../../../assets/images/virticalLine.svg";

export default function HospitalComponent({ name }) {
    const [hospitalName, setHospitalName] = useState(name);
    const [user, setUser] = useState("김아현");
    const [date, setDate] = useState("2024. 05. 07 화요일 10:00");
    const [sms, setSms] = useState("O");
    const [auto, setAuto] = useState("O");
    const [telNum, setTelNum] = useState("00-000-0000");

    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(telNum);
        } catch (error) {
            console.log("실패");
        }
    };

    return (
        <>
            <HospitalContainer>
                <div>
                    <TextContainer>
                        <img src={hospitalMaeker} alt="hospital marker" />
                        <HospitalNameText>{hospitalName}</HospitalNameText>
                    </TextContainer>
                </div>
                <MainContainer>
                    <ItemContainer>
                        <MainItemWrapper>
                            <MainItem
                                subject="진료자"
                                text={user}
                            />
                        </MainItemWrapper>
                        <VerticalLine src={virticalLine} alt="virticalLine" />
                        <MainItemWrapper>
                            <MainItem
                                subject="예약 날짜 & 시간"
                                text={date}
                                highlight
                            />
                        </MainItemWrapper>
                    </ItemContainer>
                    <ItemContainer>
                        <MainItemWrapper>
                            <MainItem
                                subject="진료과목"
                                text="이비인후과"
                            />
                        </MainItemWrapper>
                        <VerticalLine src={virticalLine} alt="virticalLine" />
                        <MainItemWrapper>
                            <MainItem
                                subject="내원 일수"
                                text="1일"
                                highlight
                            />
                        </MainItemWrapper>
                    </ItemContainer>
                </MainContainer>
                <TelAndReview>
                    <Tel>
                        <BsFillTelephoneFill />
                        <TelNumber>{telNum}</TelNumber>
                        <CopyTel onClick={handleCopyClipBoard}>복사</CopyTel>
                    </Tel>
                </TelAndReview>
            </HospitalContainer>
        </>
    );
}

const HospitalContainer = styled.div`
    margin-bottom: 2vh;
`;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 3vh;
`;

const HospitalNameText = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    margin: 0 0.5rem;
`;

const MainContainer = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;

const MainItemWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const VerticalLine = styled.img`
    height: 100%;
    margin: 0 0.5rem;
`;

const TelAndReview = styled.div`
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Tel = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: #808080;
`;

const TelNumber = styled.div`
    margin: 0 0.4rem 0 0.2rem;
`;

const CopyTel = styled.div`
    cursor: pointer;
    color: #57aeff;

    &:hover {
        text-decoration: underline;
    }
`;
