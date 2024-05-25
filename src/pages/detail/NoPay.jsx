import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import AgreeText from "../../components/detail/AgreeText";

const formatDate = (date) => {
    const daysOfWeek = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}.${month}.${day}. ${dayOfWeek}`;
};

const NoPay = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const [allChecked, setAllChecked] = useState(false);
    const [requiredChecked1, setRequiredChecked1] = useState(false);
    const [requiredChecked2, setRequiredChecked2] = useState(false);

    const handleAllChange = (checked, e) => {
        setAllChecked(checked);

        setRequiredChecked1(checked);
        setRequiredChecked2(checked);
    };

    const handleRequiredChange1 = (checked, e) => {
        setRequiredChecked1(checked);
    };

    const handleRequiredChange2 = (checked, e) => {
        setRequiredChecked2(checked);
    };

    const nextHandle = () => {
        navigate("/detail/success", { state: { text: state.text } });
    };

    const [allRequiredChecked, setAllRequiredChecked] = useState(false);

    useEffect(() => {
        setAllRequiredChecked(requiredChecked1 && requiredChecked2);

        if (requiredChecked1 && requiredChecked2) setAllChecked(true);
        else setAllChecked(false);
    }, [requiredChecked1, requiredChecked2]);

    useEffect(() => {
        setSelectedDate(state.selectedDate);
        setSelectedTime(state.selectedTime);
    });

    return (
        <>
            <NavBar>
                <GeneralContainer>
                    <PathText>{state.text}</PathText>
                </GeneralContainer>
            </NavBar>
            <Frame>
                <Div>
                    <GeneralContainer>
                        <TitleText>예약 날짜 & 시간</TitleText>
                        <DateText>
                            {formatDate(new Date(selectedDate))} {selectedTime}
                        </DateText>
                    </GeneralContainer>

                    <StyledHr></StyledHr>

                    <GeneralContainer>
                        <AgreeText
                            requiredChecked1={requiredChecked1}
                            requiredChecked2={requiredChecked2}
                            handleAllChange={handleAllChange}
                            allChecked={allChecked}
                            handleRequiredChange1={handleRequiredChange1}
                            handleRequiredChange2={handleRequiredChange2}
                        ></AgreeText>
                    </GeneralContainer>
                    <NextBtn
                        disabled={!allRequiredChecked}
                        onClick={nextHandle}
                    >
                        예약하기
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
    width: 33rem;

    padding: 1rem 1rem 4rem 1rem;
`;

const StyledHr = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid #c3c3c3;
    margin: 1.6rem 0;
`;

const PathText = styled.div`
    color: #808080;
    font-size: 0.75rem;
    margin-left: 9rem;
    margin-bottom: 1rem;
`;

const GeneralContainer = styled.div`
    text-align: start;
    margin-left: 1rem;
    align-items: center;
`;

const TitleText = styled.div`
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
`;

const DateText = styled.div`
    color: #1371ff;
    font-weight: 600;
    margin-bottom: 2.3rem;
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

export default NoPay;
