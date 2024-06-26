import styled from "styled-components";
import hospitalMarker from "../../assets/icons/hospitalMarker.svg";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import consulationChatImg from "../../assets/images/consulatoinChatImg.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HospitalContainer = styled.div`
    margin-bottom: 2vh;
`;

const HospitalNameText = styled.p`
    margin-left: 0.5rem;
    color: #000;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%; /* 1.75rem */
`;

const HospitalLocationText = styled.p`
    margin-left: 0.3rem;
    color: #989898;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%; /* 1.3125rem */
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
    cursor: pointer;
    margin-top: 1vh;
    width: 40vw;
    height: 18vh;
    border-radius: 2.0625rem;
    background: url(${(props) => props.imageUrl}) no-repeat center center;
    background-size: cover;
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
    border: 1px solid #606060;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.2vw;
`;

const HospitalTagText = styled.p`
    color: #606060;
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
`;

const ConsultationText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
    const navigate = useNavigate();
    const [rateNum, setRateNum] = useState(Number(data.totalRate));
    const [hospitalTags, setHospitalTags] = useState(
        data.tags || ["안심 실명제", "분야별 협진", "전담 회복실"]
    );

    useEffect(() => {
        console.log("Props received:", { data });
    }, [data]);

    const handleReservationClick = () => {
        const text = `홈 > ${data.hospitalName}`;
        navigate("/detail/reservation", {
            state: {
                text: text,
                hospitalId: data.hospitalId,
            },
        });
    };

    const handleDetailClick = () => {
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
                        <img src={hospitalMarker} alt="hospitalMarker" />
                        <HospitalNameText>{data.hospitalName}</HospitalNameText>
                        <HospitalLocationText>
                            {data.address}
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
                <DetailHospitalContainer
                    imageUrl={data.imageUrl}
                    onClick={handleDetailClick}
                >
                    <ConsultationButton onClick={handleReservationClick}>
                        <ConsultationText>예약하기</ConsultationText>
                    </ConsultationButton>
                </DetailHospitalContainer>
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
