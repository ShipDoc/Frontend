import React, { useState, useRef, useEffect } from "react";
import HospitalComponent from "../../components/ReserveHealth/HospitalComponent";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import SortModal from "../../components/Main/SortModal";
import sortIcon from "../../assets/icons/sortIcon.svg";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import { getHealthCareList } from "../../apis/api/healthCare";
import { useLocation, useNavigate } from "react-router-dom";
import Star from "../../components/common/Star";
import ReviewStar from "../../components/review/ReviewStar";
import ReviewContainer from "../../components/review/ReviewContainer";

const Review = () => {
    const { state } = useLocation;

    const [visitNum, setVistNum] = useState(0);

    return (
        <>
            <NavBar activeIndex={0}></NavBar>
            <Frame>
                <Div>
                    <HospitalTitle>
                        {state ? state.hospitalName : "연세이빈후과의원"}
                    </HospitalTitle>
                    <TotalStar>
                        <ReviewStar rate="2"></ReviewStar>
                    </TotalStar>
                    <VisiterContainer>
                        <VisitNumber>
                            <span style={{ color: "black", fontWeight: 700 }}>
                                {visitNum}
                            </span>
                            건의 방문자 평가
                        </VisitNumber>
                        <img src={sortIcon}></img>
                    </VisiterContainer>

                    <StyledHr></StyledHr>

                    <GeneralContainer>
                        <ReviewContainer></ReviewContainer>
                    </GeneralContainer>
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
    margin-top: 0.3rem;
`;

const GeneralContainer = styled.div`
    width: 100%;
    padding: 1rem;
`;

const HospitalTitle = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

const TotalStar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const VisiterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 2rem;
`;

const VisitNumber = styled.div`
    color: #656565;
`;

export default Review;
