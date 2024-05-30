import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import sortIcon from "../../assets/icons/sortIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewStar from "../../components/review/ReviewStar";
import ReviewContainer from "../../components/review/ReviewContainer";
import { getReviews } from "../../apis/api/review";
import chatFixed from "../../assets/images/chat/chatFixed.svg";
import SortModal from "../../components/review/SortModal";

const Review = () => {
    const { state } = useLocation();
    const [reviews, setReviews] = useState([]);
    const [visitNum, setVistNum] = useState(0);
    const [rateNum, setRateNum] = useState(0);
    const [hospitalName, setHospitalName] = useState("");
    const [size, setSize] = useState(3); // 초기 size 값을 3으로 설정
    const navigate = useNavigate();

    const handleChatClick = () => {
        navigate("/chat");
    };

    const sortOptionsMap = {
        "최신 순": "LATEST",
        "추천 많은 순": "RECOMMEND",
        "별점 높은 순": "TOP_SCORE",
        "별점 낮은 순": "LOW_SCORE",
    };

    const [modal, setModal] = useState(false);
    const [sortOption, setSortOption] = useState("LATEST");
    const [displaySortOption, setDisplaySortOption] = useState("최신 순");
    const modalRef = useRef();
    const sortIconRef = useRef();
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    const handleSelectOption = (option) => {
        setSortOption(sortOptionsMap[option]);
        setDisplaySortOption(option);
        setModal(false);
    };

    useEffect(() => {
        const fetchHospitalReview = async () => {
            try {
                const res = await getReviews({
                    hospitalId: state.hospitalId,
                    page: 1,
                    size: size, // size 값을 사용
                    sort: sortOption,
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
    }, [state, sortOption, size]); // size가 변경될 때마다 데이터를 다시 불러옴

    useEffect(() => {
        if (sortIconRef.current) {
            const iconRect = sortIconRef.current.getBoundingClientRect();
            setModalPosition({
                top: iconRect.bottom + window.scrollY,
                left: iconRect.left + iconRect.width / 2,
            });
        }
    }, [modal]);

    const handleLoadMore = () => {
        setSize((prevSize) => prevSize + 3); // size 값을 3 증가
    };

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
                        <SortIcon
                            ref={sortIconRef}
                            src={sortIcon}
                            onClick={toggleModal}
                        ></SortIcon>
                    </VisiterContainer>
                    <StyledHr></StyledHr>
                    <GeneralContainer>
                        {reviews.length !== 0 ? (
                            reviews.map((review) => {
                                return (
                                    <div key={review.reviewId}>
                                        <ReviewContainer review={review} />
                                        <StyledHr />
                                    </div>
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
            <SearchButton onClick={handleLoadMore}>더보기</SearchButton>
            {modal && (
                <div
                    ref={modalRef}
                    style={{
                        position: "absolute",
                        top: modalPosition.top,
                        left: modalPosition.left,
                        transform: "translate(-50%)",
                        zIndex: 10,
                    }}
                >
                    <SortModal onSelect={handleSelectOption} />
                </div>
            )}
            <ChatFixed src={chatFixed} alt="Chat" onClick={handleChatClick} />
        </>
    );
};

const Frame = styled.div`
    font-family: Pretendard;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    margin-bottom: 5rem;
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

const SortIcon = styled.img`
    cursor: pointer;
`;

const NoReviewContent = styled.div`
    margin: 5rem 0;
    font-size: 1.2rem;
    color: #808080;
    font-weight: 600;
`;

const SearchButton = styled.button`
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1371ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 20px;
    width: 90%;
    max-width: 42rem;
    height: 4rem;
    margin-top: 3rem;
    cursor: pointer;
`;

const ChatFixed = styled.img`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    z-index: 1000;
`;

export default Review;
