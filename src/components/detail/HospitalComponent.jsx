import React from "react";
import styled from "styled-components";
import placeImg from "../../assets/images/place.svg";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import leftImg from "../../assets/images/leftImg.svg";
import rightImg from "../../assets/images/rightImg.svg";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

// const DetailHospitaComponenet = styled.div` // 사진 담을 컴포넌트

// `

const RateStar = ({ filled }) => (
    <img src={filled ? fillRateImg : basicRateImg} alt="rateStar" />
);

const Rating = ({ rating }) => {
    const totalStars = 5;

    const stars = Array.from(
        { length: totalStars },
        (
            _,
            index // _는 값을 사용하지 않기 때문에 _로 표시
        ) => <RateStar key={index} filled={index < rating} />
    );
    return <div style={{ display: "flex", alignItems: "center" }}>{stars}</div>;
};

export default function HospitalComponent({ name }) {
    const [hospitalName, setHospitalName] = useState(name);
    const [hospitalLocation, setHospitalLocation] = useState("병원 주소");
    const [rateNum, setRateNum] = useState(0); // 나중에 평점 받아오기
    const [hospitalTags, setHospitalTags] = useState([
        "Test 1",
        "Test 2",
        "Test 3",
    ]); // 병원 분류 상태 (백에서 받아오기)

    const [telNum, setTelNum] = useState("00-000-0000");

    const [reviewCnt, setReviewCnt] = useState(0);

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
                        <HospitalNameText>{hospitalName}</HospitalNameText>
                        <HospitalLocationText>
                            {hospitalLocation}
                        </HospitalLocationText>
                    </TextContainer>
                </div>
                <DetailHospitalContainer>
                    <img
                        src={leftImg}
                        alt="leftImg"
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "2vw",
                            transform: "translate(0, -50%)",
                            cursor: "pointer",
                        }}
                    />
                    <img
                        src={rightImg}
                        alt="rightImg"
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: "2vw",
                            transform: "translate(0, -50%)",
                            cursor: "pointer",
                        }}
                    />
                </DetailHospitalContainer>
                <HospitalTagsAndRate>
                    <HospitalTagContainer>
                        {hospitalTags.map((text, index) => {
                            return (
                                <HospitalTagBox key={index}>
                                    <HospitalTagText>{text}</HospitalTagText>
                                </HospitalTagBox>
                            );
                        })}
                    </HospitalTagContainer>
                    <RatingContainer>
                        <Rating rating={rateNum} />
                        <RateText>{rateNum.toFixed(1)}</RateText>
                    </RatingContainer>
                </HospitalTagsAndRate>

                <TelAndReview>
                    <Tel>
                        <BsFillTelephoneFill />
                        <TelNumber>{telNum}</TelNumber>
                        <CopyTel onClick={handleCopyClipBoard}>복사</CopyTel>
                    </Tel>
                    <Review>{reviewCnt}개의 리뷰</Review>
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
    font-weight: 500;
    margin-right: 0.5rem;
`;

const HospitalLocationText = styled.div`
    color: #989898;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 0.09rem;
`;

const DetailHospitalContainer = styled.div`
    margin-top: 1vh;
    width: 100%;
    height: 18vh;
    border-radius: 33px;
    background: #e6e5eb;
    position: relative;
`;

const HospitalTagsAndRate = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HospitalTagContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`;

const HospitalTagBox = styled.div`
    border-radius: 0.5625rem;
    border: 1px solid #606060;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem 0.4rem;
`;

const HospitalTagText = styled.p`
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    color: #606060;
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

const RateText = styled.div`
    color: #e7e7e7;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    padding-top: 0.17rem;
    margin-left: 0.5rem;
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

const Review = styled.div`
    color: #808080;
    display: flex;
    font-size: 0.75rem;
    margin-right: 1rem;
`;
