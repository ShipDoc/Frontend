import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HospitalComponent from "../../components/MyPage/Apointment/ApointmentHospital";
import styled from "styled-components";
import HospitalMap from "../../components/detail/HospitalMap";
import { useNavigate } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();

    const [peopleNum, setPeopleNum] = useState(0);

    const handleBtn = () => {
        // 예약 버튼 클릭 시 동작
    };

    return (
        <>
            <NavBar
                title="마이페이지 &gt; 병원 예약내역 보기 &gt; 연세이빈후과의원"
            />
            <Frame>
                <Div>
                    <HospitalComponent name="연세이빈후과의원"></HospitalComponent>
                    <StyledHr />
                    <HospitalMap></HospitalMap>
                    <StyledHr />
                    <MainContainer>
                        <GeneralContainer>
                            <SubTitle>실시간 진료 대기실 현황</SubTitle>
                            <TagContainer>
                                <PeopleNumText>진료실</PeopleNumText>
                                <TagBox>
                                    <TagText>
                                        <span style={{ color: "#E22222" }}>
                                            {peopleNum}명
                                        </span>{" "}
                                        대기중
                                    </TagText>
                                </TagBox>
                            </TagContainer>
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

const PeopleNumText = styled.div`
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    color: #606060;
`;

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-top: 1rem;
`;

const TagBox = styled.div`
    border-radius: 0.5625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem 0.4rem;
    background: #e6e5eb;
`;

const TagText = styled.p`
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    color: #606060;
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

const ButtonText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Detail;