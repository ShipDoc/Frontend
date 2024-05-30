import styled from "styled-components";
import placeImg from "../../assets/images/place.svg";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import consulationChatImg from "../../assets/images/consulatoinChatImg.svg";
import { useState, useEffect } from "react";

const HospitalContainer = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    margin-bottom: 2vh;
`;

const HospitalNameText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%; /* 1.75rem */
`;

const HospitalLocationText = styled.p`
    color: #e7e7e7;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%; /* 1.3125rem */
`;

// const HospitalRateStar = styled.

const RateText = styled.p`
    color: #e7e7e7;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%;
    margin: 0;
`;

const DetailHospitalContainer = styled.div`
    margin-top: 1vh;
    width: 40vw;
    height: 18vh;
    background: url(${props => props.imageUrl}) no-repeat center center;
    background-size: cover;
    border-radius: 2.0625rem;
    position: relative;
`;

const HospitalTagContainer = styled.div`
    margin-top: 1vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5vw;
`;

const HospitalTagBox = styled.div`
    border-radius: 0.5625rem;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.2vw;
`;

const HospitalTagText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 175%; /* 1.3125rem */
`;

const ConsultationButton = styled.div`
    border-radius: 1.0625rem;
    background: var(--Primary-color, #1371ff);
    width: 5vw;
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    position: absolute;
    bottom: 5%;
    right: 5%;
    cursor: pointer;
    // padding: 0 0.2vw;
`;

const ConsultationText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

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

export default function HospitalComponent({
    hospitalName,
    address,
    totalRate,
    imageUrl,
    tags,
}) {
    const [rateNum, setRateNum] = useState(Number(totalRate));
    const [hospitalTags, setHospitalTags] = useState([
        "안심 실명제",
        "분야별 협진",
        "전담 회복실",
    ]); // 병원 분류 상태 (백에서 받아오기)

    useEffect(() => {
        console.log("Props received:", {
            hospitalName,
            address,
            totalRate,
            imageUrl,
            tags
        });
    }, [hospitalName, address, totalRate, imageUrl, tags]);

    return (
        <>
            <HospitalContainer>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2vh",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.2vw",
                        }}
                    >
                        <img src={placeImg} alt="placeImg" />
                        <HospitalNameText>{hospitalName}</HospitalNameText>
                        <HospitalLocationText>
                            {address}
                        </HospitalLocationText>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5vw",
                        }}
                    >
                        <Rating rating={rateNum} />
                        <RateText>{rateNum.toFixed(1)}</RateText>
                    </div>
                </div>
                <DetailHospitalContainer imageUrl={imageUrl}/>
                <HospitalTagContainer>
                    {hospitalTags.map((text, index) => {
                        return (
                            <HospitalTagBox key={index}>
                                <HospitalTagText>{text}</HospitalTagText>
                            </HospitalTagBox>
                        );
                    })}
                </HospitalTagContainer>
            </HospitalContainer>
        </>
    );
}
