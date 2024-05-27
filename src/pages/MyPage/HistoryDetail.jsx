import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HospitalComponent from "../../components/MyPage/History/HistoryHospital";
import styled from "styled-components";
import HospitalMap from "../../components/detail/HospitalMap";
import { useNavigate } from "react-router-dom";
import ShipDocAi from "../../assets/images/ShipDocAi.svg";
import subtract from "../../assets/images/subtract.svg";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import { getDetail } from "../../apis/api/detail";

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
};

const Detail = () => {
    const [hospitalDetail, setHospitalDetail] = useState({});

    const { location, error } = useGeoLocation(geolocationOptions);

    const navigate = useNavigate();

    const [peopleNum, setPeopleNum] = useState(0);
    const [isReviewClicked, setIsReviewClicked] = useState(false);

    useEffect(() => {
        const savedReviewState = localStorage.getItem('isReviewClicked');
        if (savedReviewState) {
            setIsReviewClicked(JSON.parse(savedReviewState));
        }
    }, []);

    const handleBtn = () => {
        // 예약 버튼 클릭 시 동작
    };

    const handleReviewClick = () => {
        const newReviewState = !isReviewClicked;
        setIsReviewClicked(newReviewState);
        localStorage.setItem('isReviewClicked', JSON.stringify(newReviewState));
    };

    useEffect(() => {
        const fetchHospitalDetail = async () => {
            try {
                const res = await getDetail({ hospitalId: 1 });
                // console.log(res);

                if (res.data.code === "COMMON200") {
                    setHospitalDetail(res.data.result);
                } else {
                    console.log(res.data.code);
                }
            } catch (error) {
                console.error("Failed to fetch hospital detail:", error);
            }
        };

        fetchHospitalDetail();
    }, []);


    return (
        <>
            <NavBar>
                마이페이지 &gt; 병원 예약내역 보기 &gt; 연세이빈후과의원
            </NavBar>
            <Frame>
                <Div>
                    <HospitalComponent name="연세이빈후과의원"></HospitalComponent>
                    <StyledHr />
                    <HospitalMap data={location}></HospitalMap>
                    <StyledHr />
                    <MainContainer>
                        <GeneralContainer>
                            <SubTitle>AI 쉽닥 분석</SubTitle>
                            <TagContainer>
                                <AIContent>
                                    <ImgContainer>
                                        <Subtract src={subtract} alt="subtract" />
                                        <ShipdocAi src={ShipDocAi} alt="ShipDocAi" />
                                    </ImgContainer>
                                    <AiText>
                                        <AItitle>
                                            <span className="highlight">"코감기"</span>에 걸리셨군요?
                                        </AItitle>
                                        <AISub>
                                            단백질, 비타민, 미네랄, 무기질 등이 풍부한 식품을 섭취하는 것이 좋습니다.<br />
                                            달걀, 콩, 두부 등 단백질이 풍부한 음식과, 비타민이 풍부한 과일, 채소,<br />
                                            그리고 미네랄이 풍부한 감자, 고구마, 현미 등을 충분히 섭취해주는 것이 좋아요.<br />
                                        </AISub>
                                    </AiText>
                                </AIContent>
                            </TagContainer>
                            <ReviewBtn onClick={handleReviewClick} isClicked={isReviewClicked}>
                                <ButtonText>
                                    <span>{isReviewClicked ? "리뷰 남기기 완료" : "리뷰 남기기"}</span>
                                </ButtonText>
                            </ReviewBtn>
                            <ReservationBtn onClick={handleBtn}>
                                <ButtonText>
                                    <span>병원 다시 예약하기</span>
                                </ButtonText>
                            </ReservationBtn>
                        </GeneralContainer>
                    </MainContainer>
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

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const GeneralContainer = styled.div`
    text-align: start;
    margin-left: 1rem;
    align-items: center;
    width: 100%;
`;

const SubTitle = styled.div`
    font-weight: 500;
    font-size: 1rem;
`;

const AIContent = styled.div`
    width: 100%;
    display: flex;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    background-color: #E6E5EB;
    align-items: center;
    padding: 1rem 2rem 0 2rem;
    border-radius: 8px;
`;

const ImgContainer = styled.div`
    position: relative;
    width: 8rem;
    height: 8rem;
    flex-shrink: 0;
`;

const Subtract = styled.img`
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ShipdocAi = styled.img`
    position: absolute;
    top: 0rem;
    left: 0;
    width: 100%;
    height: 100%;
`;

const AiText = styled.div`
    margin-left: 2rem;
    flex: 1; 
`;

const AItitle = styled.div`
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    color: #4f4f4f;
    font-weight: 800;
    .highlight {
        color: #1371ff;
    }
`;

const AISub = styled.div`
    margin-bottom: 1rem;
    color: #4f4f4f;
    font-weight: 500;
`;

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
`;

const ReservationBtn = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 20px;
    width: 100%;
    height: 3rem;
    margin-top: 5rem;
    box-shadow: 0px 4.411px 4.411px 0px rgba(0, 0, 0, 0.25);
`;

const ReviewBtn = styled.button`
    background-color: ${props => props.isClicked ? '#656565' : '#1371ff'};
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 20px;
    width: 100%;
    height: 7rem;
    margin-top: 5rem;
    box-shadow: 0px 4.411px 4.411px 0px rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Detail;
