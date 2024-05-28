import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewClickStar from "../../components/review/ReviewClickStar";
import { postReview } from "../../apis/api/review";

const WriteReview = () => {
    // {
    //     state : {
    //         id: 병원 아이디
    //         hospitalName : 병원 이름
    //     }
    // }
    const { state } = useLocation();

    const [text, setText] = useState("");
    const [textCount, setTextCount] = useState(0);

    // 평점
    const [popularity, setPopularity] = useState(0);

    const textChange = (e) => {
        const { value } = e.target;
        setText(value.slice(0, 1000)); // 1000자 제한
    };

    const writeReview = async () => {
        try {
            const res = await postReview({
                // hospitalId: state.id,
                hospitalId: 603,
                score: popularity, // 평점
                content: text, // 리뷰 내용
            });

            if (res.data.code === "COMMON200" || res.data.status === 200) {
                console.log("리뷰가 등록되었습니다!");
            } else {
                console.log(res.data.code);
            }
        } catch (error) {
            alert("에러가 발생하였습니다!");
        }
    };

    useEffect(() => {
        setTextCount(text.length);
    }, [text]);

    return (
        <>
            <NavBar activeIndex={0}></NavBar>
            <Frame>
                <Div>
                    <HospitalTitle>
                        {state ? state.hospitalName : "연세이빈후과의원"}
                    </HospitalTitle>

                    <ReviewClickStar
                        popularity={popularity}
                        setPopularity={setPopularity}
                    ></ReviewClickStar>
                    <StyledHr></StyledHr>
                    <ReviewBoxFrame>
                        <ReviewBoxTitle>
                            <span style={{ color: "#1371FF" }}>방문후기</span>{" "}
                            (선택)
                        </ReviewBoxTitle>

                        <BoxHr></BoxHr>

                        <ContentFrame
                            value={text}
                            onChange={textChange}
                        ></ContentFrame>
                        <TextCnt>({textCount}/1000자)</TextCnt>
                    </ReviewBoxFrame>
                    <NextBtn disabled={textCount === 0} onClick={writeReview}>
                        등록하기
                    </NextBtn>
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

const ReviewBoxFrame = styled.div`
    width: 80%;
    height: 50vh;
    border: 1.7px solid #fff;
    border-radius: 22px;
    margin: 2rem auto;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1), -4px 4px 4px rgba(0, 0, 0, 0.1),
        -4px -4px 4px rgba(0, 0, 0, 0.1), 4px -4px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewBoxTitle = styled.div`
    margin: 1.2rem 0 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: start;
    color: #656565;
`;

const CheckBoxStyle = styled.div`
    margin: 2rem 0 2rem 2rem;
    font-size: 1rem;
    font-weight: 500;
`;

const ContentFrame = styled.textarea`
    flex: 1;
    width: calc(100% - 2rem); /* 좌우 2rem씩 마진 고려 */
    height: calc(100% - 5rem);
    border: none;
    resize: none;
    outline: none;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;

    padding: 1rem;
    box-sizing: border-box;
    border-radius: 22px;
`;

const BoxHr = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid black;
    margin-top: 0.3rem;
`;

const TextCnt = styled.div`
    margin: 0 2rem;
    text-align: end;
    color: #656565;
    font-weight: 500;
    font-size: 0.7rem;
`;

const NextBtn = styled.button`
    background-color: ${(props) => (props.disabled ? "#D9D9D9" : "#1371ff")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    margin-top: 2rem;

    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 21px;
    width: 80%;
    height: 3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default WriteReview;
