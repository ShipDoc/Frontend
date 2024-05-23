import React, { useState, useMemo } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import Vector from "../../assets/images/Vector.svg";

const StyledCalendarWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
    .react-calendar {
        width: 100%;
        border: none;
        padding: 3% 5%;
        background-color: white;
    }

    /* 전체 폰트 컬러 */
    .react-calendar__month-view {
        abbr {
            color: ${(props) => props.theme.gray_1};
        }
    }

    /* 토요일 일요일 날짜 텍스트 검은색으로 */
    .react-calendar__month-view__days__day--weekend {
        color: black;
    }

    /* 네비게이션 가운데 정렬 */
    .react-calendar__navigation {
        justify-content: center;
    }

    /* 네비게이션 폰트 설정 */
    .react-calendar__navigation button {
        font-weight: 800;
        font-size: 1rem;
        margin: 0 1rem;
    }

    /* 네비게이션 버튼 컬러 */
    .react-calendar__navigation button:focus {
        background-color: white;
    }

    /* 네비게이션 비활성화 됐을때 스타일 */
    .react-calendar__navigation button:disabled {
        background-color: white;
        color: ${(props) => props.theme.darkBlack};
    }

    /* 년/월 상단 네비게이션 칸 크기 줄이기 */
    .react-calendar__navigation__label {
        flex-grow: 0 !important;
    }

    /* 요일 밑줄 제거 */
    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
        font-weight: 800;
    }

    /* 토요일은 파란색, 일요일은 빨간 폰트 */
    .react-calendar__month-view {
        abbr[title="토요일"] {
            color: #1371ff;
        }

        abbr[title="일요일"] {
            color: #ff0000;
        }
    }

    /* 오늘 날짜 폰트 컬러 */
    .react-calendar__tile--now {
        background: none;
        abbr {
            color: ${(props) => props.theme.primary_2};
        }
    }

    /* 네비게이션 월 스타일 적용 */
    .react-calendar__year-view__months__month {
        border-radius: 0.8rem;
        background-color: ${(props) => props.theme.gray_5};
        padding: 0;
    }

    /* 네비게이션 현재 월 스타일 적용 */
    .react-calendar__tile--hasActive {
        background-color: ${(props) => props.theme.primary_2};
        abbr {
            color: black;
        }
    }

    /* 일 날짜 간격 */
    .react-calendar__tile {
        padding: 5px 0px 30px 0px;
        position: relative;
    }

    /* 네비게이션 월 스타일 적용 */
    .react-calendar__year-view__months__month {
        flex: 0 0 calc(33.3333% - 10px) !important;
        margin-inline-start: 5px !important;
        margin-inline-end: 5px !important;
        margin-block-end: 10px;
        padding: 20px 6.6667px;
        font-size: 0.9rem;
        font-weight: 600;
        color: ${(props) => props.theme.gray_1};
    }

    /* 선택한 날짜 스타일 적용 */
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        background-color: #b1e3ff;
        border-radius: 16px;
        color: #005be2;
    }

    /* 비활성화 날짜 스타일 */
    .react-calendar__tile:disabled {
        background-color: white;
        color: #ababab;
    }
`;

const StyledCalendar = styled(Calendar)``;

/* 오늘 날짜에 텍스트 삽입 스타일 */
const StyledToday = styled.img`
    height: 1rem;
    width: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
`;

const MyCalendar = ({ selectedDate, handleDateChange }) => {
    const [activeStartDate, setActiveStartDate] = useState(null);
    const today = useMemo(() => new Date(), []);

    return (
        <StyledCalendarWrapper>
            <StyledCalendar
                value={selectedDate}
                onChange={handleDateChange}
                formatDay={(locale, date) => moment(date).format("D")}
                formatYear={(locale, date) => moment(date).format("YYYY")}
                formatMonthYear={(locale, date) =>
                    moment(date).format("YYYY. MM")
                }
                calendarType="gregory"
                showNeighboringMonth={false}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
                activeStartDate={
                    activeStartDate === null ? undefined : activeStartDate
                }
                onActiveStartDateChange={({ activeStartDate }) =>
                    setActiveStartDate(activeStartDate)
                }
                tileDisabled={({ date, view }) =>
                    view === "month" &&
                    date < today &&
                    !moment(date).isSame(today, "day")
                }
                tileContent={({ date, view }) => {
                    let html = [];
                    if (
                        selectedDate &&
                        view === "month" &&
                        date.getTime() === selectedDate.getTime()
                    ) {
                        html.push(<StyledToday key={"key"} src={Vector} />);
                    }
                    return <>{html}</>;
                }}
            />
        </StyledCalendarWrapper>
    );
};

export default MyCalendar;
