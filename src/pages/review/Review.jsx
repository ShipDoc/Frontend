import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import sortIcon from "../../assets/icons/sortIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewStar from "../../components/review/ReviewStar";
import ReviewContainer from "../../components/review/ReviewContainer";
import { getReviews } from "../../apis/api/review";

const Review = () => {
    const { state } = useLocation();

    const [reviews, setReviews] = useState([]);

    const [visitNum, setVistNum] = useState(0);
    const [rateNum, setRateNum] = useState(0);
    const [hospitalName, setHospitalName] = useState("");

    useEffect(() => {
        const fetchHospitalReview = async () => {
            try {
                const res = await getReviews({
                    hospitalId: state.hospitalId,
                    page: 1,
                    size: 3,
                    sort: "LATEST",
                });

                if (res.data.code === "COMMON200" || res.data.status === 200) {
                    const reviewData = res.data.result;

                    setReviews(reviewData.reviewList);
                    setRateNum(Number(reviewData.totalRate));

                    setVistNum(reviewData.reviewList.length);
                    setHospitalName(reviewData.hospitalName);
                } else {
                    console.log(res.data.code);
                }
            } catch (error) {
                alert("오류가 발생하였습니다!");
            }
        };

        fetchHospitalReview();
    }, [state]);

    return (
        <>
            <NavBar activeIndex={0}></NavBar>
            <Frame>
                <Div>
                    <HospitalTitle>
                        {hospitalName ? hospitalName : "연세이빈후과의원"}
                    </HospitalTitle>
                    <TotalStar>
                        <ReviewStar rate={rateNum ? rateNum : 0}></ReviewStar>
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
                        {reviews.length !== 0 ? (
                            reviews.map((review) => {
                                return (
                                    <>
                                        <ReviewContainer
                                            review={review}
                                        ></ReviewContainer>
                                        <StyledHr></StyledHr>
                                    </>
                                );
                            })
                        ) : (
                            <NoReviewContent>
                                리뷰가 존재하지 않습니다.
                            </NoReviewContent>
                        )}
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

const NoReviewContent = styled.div`
    margin: 5rem 0;
    font-size: 1.2rem;
    color: #808080;
    font-weight: 600;
`;

export default Review;
