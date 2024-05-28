import React from "react";
import styled from "styled-components";
import MainItem from "./MainItem";
import { BsFillTelephoneFill } from "react-icons/bs";
import hospitalMaeker from "../../../assets/icons/hospitalMarker.svg";
import virticalLine1 from "../../../assets/images/virticalLine1.svg";
import virticalLine2 from "../../../assets/images/virticalLine2.svg";

export default function HospitalComponent({ patientName, hospitalName, hospitalPhone, reservationTime, diagnosis, department, visitCount }) {
    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(hospitalPhone);
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
                                text={patientName}
                            />
                        </MainItemWrapper>
                        <VerticalLine src={virticalLine1} alt="virticalLine" />
                        <MainItemWrapper>
                            <MainItem
                                subject="예약 날짜 & 시간"
                                text={new Date(reservationTime).toLocaleString('ko-KR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    weekday: 'long',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                                highlight
                            />
                        </MainItemWrapper>
                    </ItemContainer>
                    <ItemContainer>
                        <MainItemWrapper>
                            <MainItem
                                subject="진료과목"
                                text={department}
                            />
                        </MainItemWrapper>
                        <VerticalLine src={virticalLine2} alt="virticalLine" />
                        <MainItemWrapper>
                            <MainItem
                                subject="내원 일수"
                                text={`${visitCount}일`}
                                highlight
                            />
                        </MainItemWrapper>
                    </ItemContainer>
                </MainContainer>
                <TelAndReview>
                    <Tel>
                        <BsFillTelephoneFill />
                        <TelNumber>{hospitalPhone}</TelNumber>
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
