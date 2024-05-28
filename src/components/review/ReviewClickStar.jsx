import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ReviewClickStar = ({ popularity, setPopularity }) => {
    const STAR_IDX_ARR = ["1", "2", "3", "4", "5"];
    const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
    const calcStarRates = () => {
        let tempStarRatesArr = [0, 0, 0, 0, 0];
        let starVerScore = (popularity * 70) / 5;
        //하나당 별의 넓이가 14이니까 14*5 = 70을 곱하고
        //별 개수(5)로 나눠주었따.
        let idx = 0;
        while (starVerScore > 14) {
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };

    const handling = (e) => {
        setPopularity(e + 1);
        setRatesResArr(calcStarRates);
    };
    useEffect(() => {
        setRatesResArr(calcStarRates);
    }, [popularity]);
    return (
        <StarWrapper>
            <Stars>
                {STAR_IDX_ARR.map((item, idx) => {
                    return (
                        <div
                            onClick={() => handling(idx)}
                            style={{ paddingBottom: "0.3rem" }}
                            className="star_icon"
                            key={idx}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="33"
                                height="31"
                                viewBox="0 0 14 13"
                                fill="#D9D9D9"
                            >
                                <clipPath id={`${item}StarClip`}>
                                    <rect
                                        width={`${ratesResArr[idx]}`}
                                        height="39"
                                    />
                                </clipPath>
                                <path
                                    id={`${item}Star`}
                                    d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                                    transform="translate(-2 -2)"
                                />
                                <use
                                    clipPath={`url(#${item}StarClip)`}
                                    href={`#${item}Star`}
                                    fill="#1371FF"
                                />
                            </svg>
                        </div>
                    );
                })}
            </Stars>
            <div
                style={{
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    marginLeft: "1rem",
                }}
            >
                {Number(popularity)} / 5
            </div>
        </StarWrapper>
    );
};

const StarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 1rem 0 1rem;

    .star_icon {
        display: inline-flex;
        margin-right: 5px;
    }
`;

const Stars = styled.div`
    &::before {
        content: "*";
        color: "#ff0000";
        font-size: 2rem;
        color: #ff0000;
        position: relative;
        top: -9px;
    }
`;

export default ReviewClickStar;
