import styled from "styled-components";
import basicRateImg from "../../assets/images/basicRate.svg";
import fillRateImg from "../../assets/images/fillRate.svg";
import leftImg from "../../assets/images/leftImg.svg";
import rightImg from "../../assets/images/rightImg.svg";
import hospitalMarker from "../../assets/icons/hospitalMarker.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function HospitalComponent(props) {
    const navigate = useNavigate();

    // 세부 정보로 넘어갈 때 보내줄 navbar 밑 경로
    const [path, setPath] = useState(props.path);

    // 병원 이름
    const [hospitalName, setHospitalName] = useState(props.data.hospitalName);
    // 병원 주소
    const [hospitalLocation, setHospitalLocation] = useState(
        props.data.address
    );

    // 별점
    const [rateNum, setRateNum] = useState(Number(props.data.totalRate));
    const [hospitalTags, setHospitalTags] = useState([
        "안심 실명제",
        "분야별 협진",
        "전담 회복실",
    ]); // 병원 분류 상태 (백에서 받아오기)

    const handlingBtn = () => {
        navigate("/detail", {
            state: {
                pathText: `${path} > ${hospitalName}`,
                data: props.data,
                id: props.data.hospitalId,
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
                        onClick={handlingBtn}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.2vw",
                            cursor: "pointer",
                        }}
                    >
                        <img src={hospitalMarker} alt="hospitalMarker" />
                        <HospitalNameText>{hospitalName}</HospitalNameText>
                        <HospitalLocationText>
                            {hospitalLocation}
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
                    src={props.data.imageUrl}
                    onClick={handlingBtn}
                ></DetailHospitalContainer>
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

const HospitalContainer = styled.div`
    margin-bottom: 2vh;
`;

const HospitalNameText = styled.p`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 175%;
`;

const HospitalLocationText = styled.p`
    color: #989898;
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
    width: 100%;
    height: 18vh;
    border-radius: 2.0625rem;
    position: relative;
    background-color: #e6e5eb;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    background: url(${(props) => props.src}) no-repeat center center;
    background-size: cover;
`;

const HospitalImg = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 2.0625rem;
`;

const HospitalTagContainer = styled.div`
    margin-top: 1vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5vw;
`;

const HospitalTagBox = styled.div`
    border-radius: 9px;
    border: 1.5px solid #606060;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.2vw;
`;

const HospitalTagText = styled.p`
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 175%;
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
    font-family: Pretendard;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
