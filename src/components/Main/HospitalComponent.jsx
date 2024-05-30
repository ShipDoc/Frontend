import styled from "styled-components";
import placeImg from "../../assets/images/place.svg";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import consulationChatImg from "../../assets/images/consulatoinChatImg.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HospitalContainer = styled.div`
    margin-bottom: 2vh;
`;

const HospitalNameText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%;
`;

const HospitalLocationText = styled.p`
    color: #e7e7e7;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%;
`;

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
    line-height: 175%;
`;

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

export default function HospitalComponent({ data }) {
    const [rateNum, setRateNum] = useState(Number(data.totalRate));
    const [hospitalTags, setHospitalTags] = useState([
        "안심 실명제",
        "분야별 협진",
        "전담 회복실",
    ]); // 병원 분류 상태 (백에서 받아오기)
    const navigate = useNavigate();

    useEffect(() => {
        console.log("병원 리스트:", data);
    }, [data]);

    const handleReservationClick = () => {
        navigate("/detail", {
            state: {
                id: data.hospitalId,
                data: data,
                pathText: data.hospitalName,
            },
        });
    };

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
                        <HospitalNameText>{data.hospitalName}</HospitalNameText>
                        <HospitalLocationText>{data.address}</HospitalLocationText>
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
                <DetailHospitalContainer imageUrl={data.imageUrl} onClick={handleReservationClick} />
                <HospitalTagContainer>
                    {hospitalTags.map((text, index) => (
                        <HospitalTagBox key={index}>
                            <HospitalTagText>{text}</HospitalTagText>
                        </HospitalTagBox>
                    ))}
                </HospitalTagContainer>
            </HospitalContainer>
        </>
    );
}
// HospitalComponent.jsx
