import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/images/profile.svg";
import reco_blue from "../../assets/icons/review/reco_blue.svg";
import reco_white from "../../assets/icons/review/reco_white.svg";
import Star from "../common/Star";
import { cancelReview, recoReview } from "../../apis/api/review";

const ReviewContainer = ({ review }) => {
    const [recommendCount, setRecommendCount] = useState(0);
    const [isReco, setIsReco] = useState(false);

    const clickReco = async () => {
        try {
            const res = await recoReview({
                id: review.reviewId,
            });
            console.log(res);
            if (res.data.code === "COMMON200" || res.data.status === 200) {
                const result = res.data.result;
                setRecommendCount(result.recommendCount);
                setIsReco(result.recommended);
                console.log("리뷰가 추천!");
            } else {
                console.log(res.data.code);
            }
        } catch (error) {
            console.error("Failed to fetch hospital detail:", error);
        }
    };

    useEffect(() => {
        setRecommendCount(review.recommendCount);
        setIsReco(review.recommended);
    }, []);

    return (
        <ProfileWrapper>
            <ProfileContainer>
                <Profile>
                    <img src={profile}></img>
                    <Username>{review.name ? review.name : "김*히"}</Username>
                    <Star
                        textColor="#949494"
                        id={review.reviewId}
                        rate={review.score ? review.score : 0}
                    ></Star>
                </Profile>
                <DateText>
                    {review.createdAt ? review.createdAt : "2024년 5월 26일"}
                </DateText>
            </ProfileContainer>
            <GeneralContainer>
                <Description>
                    {review.content
                        ? review.content
                        : "안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여.안녕하세여."}
                </Description>
            </GeneralContainer>

            <BtnWrapper>
                {isReco ? (
                    <RecoBtnBlue onClick={clickReco}>
                        <ButtonText>
                            <span>추천해요</span>
                            <LogoImg src={reco_white}></LogoImg>
                            <span>{recommendCount}</span>
                        </ButtonText>
                    </RecoBtnBlue>
                ) : (
                    <RecoBtnWhite onClick={clickReco}>
                        <ButtonText>
                            <span>추천해요</span>
                            <LogoImg src={reco_blue}></LogoImg>
                            <span>{recommendCount}</span>
                        </ButtonText>
                    </RecoBtnWhite>
                )}
            </BtnWrapper>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div`
    margin: 1rem;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Username = styled.div`
    margin: 0 1rem;
    font-weight: 700;
    font-size: 1rem;
`;

const DateText = styled.div`
    font-weight: 700;
    font-size: 0.7rem;
    color: #949494;
`;

const GeneralContainer = styled.div`
    text-align: start;
    width: 100%;
    padding: 1.5rem 3rem 0 3rem;
`;

const Description = styled.div`
    line-height: 1.5rem;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

const RecoBtnBlue = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 400;
    font-size: 0.7rem;
    border-radius: 15px;
    width: 6rem;
    height: 2rem;
`;

const RecoBtnWhite = styled.button`
    border: 1px solid #1371ff;
    background: white;
    color: #1371ff;
    font-weight: 400;
    font-size: 0.7rem;
    border-radius: 15px;
    width: 6rem;
    height: 2rem;
`;

const ButtonText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 1rem;
    height: 1rem;
    margin: 0 0.3rem;
`;

export default ReviewContainer;
