import React from "react";
import styled from "styled-components";
import MainItem from "./MainItem";
import { BsFillTelephoneFill } from "react-icons/bs";
import hospitalMaeker from "../../../assets/icons/hospitalMarker.svg";

export default function HospitalComponent({ name, user, date, sms, auto, telNum }) {
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
                        <img src={hospitalMaeker} alt="hospitalMarker" />
                        <HospitalNameText>{name}</HospitalNameText>
                    </TextContainer>
                </div>
                <MainContainer>
                    <MainItem subject="진료자" text={user} />
                    <MainItem subject="예약 날짜 & 시간" text={date} highlight />
                    <MainItem subject="진료 전 문자알림" text={sms} />
                    <MainItem subject="자동 재예약" text={auto} />
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
    align-items: end;
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
  margin: 2rem;
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
