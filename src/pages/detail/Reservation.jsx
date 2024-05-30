import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import profile from "../../assets/images/profile.svg";
import calender from "../../assets/icons/calender.svg";
import message from "../../assets/icons/message.svg";
import recycle from "../../assets/icons/recycle.svg";
import MyCalendar from "../../components/detail/MyCalendar";
import { BsFillTelephoneFill } from "react-icons/bs";
import Checkbox from "react-custom-checkbox";
import { FaCheck } from "react-icons/fa6";
import ButtonRadioGroup from "../../components/detail/ButtonRadioGroup";
import ReserveTime from "../../components/detail/ReserveTime";
import { useNavigate, useLocation } from "react-router-dom";
import { getDetail, getMoreDetail } from "../../apis/api/detail";
import chatFixed from "../../assets/images/chat/chatFixed.svg";

const Reservation = () => {
    // state: {
    //     text: `홈 > ${path} > 병원 예약하기`,
    //     hospitalId: hospitalId,
    // },
    const { state } = useLocation();

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(null);

    // 전화 번호
    const [number, setNumber] = useState(null);

    const changeNumber = (e) => {
        setNumber(e.target.value);
    };

    // 날짜 선택
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };
    const [selectedTime, setSelectedTime] = useState(null);

    // 해당 날짜의 운영 시간
    const [opendDate, setOpenDate] = useState(null);

    // 병원 상세정보 데이터
    const [hospitalDetail, setHospitalDetail] = useState(null);

    // 수신 허용
    const [receptionCheck, setReceptionCheck] = useState(false);
    const handleChange = (checked, e) => {
        setReceptionCheck(checked);
    };

    const nextHandle = () => {
        function formatDateToYYYYMMDD(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 필요
            const day = String(date.getDate()).padStart(2, "0");

            return `${year}${month}${day}`;
        }

        const date = new Date(selectedDate);

        if (selectedOption === "option1") {
            navigate("/detail/pay", {
                state: {
                    selectedDate: selectedDate,
                    selectedTime: selectedTime,
                    text: state.text,
                    reserveData: {
                        hospitalId: hospitalDetail.hospitalId,
                        phoneNumber: receptionCheck ? number : null,
                        reservationDate: formatDateToYYYYMMDD(date),
                        reservationTime: selectedTime,
                        isAutoReservation: true,
                    },
                },
            });
        } else {
            navigate("/detail/noPay", {
                state: {
                    selectedDate: selectedDate,
                    selectedTime: selectedTime,
                    text: state.text,
                    reserveData: {
                        hospitalId: hospitalDetail.hospitalId,
                        phoneNumber: receptionCheck ? number : null,
                        reservationDate: formatDateToYYYYMMDD(date),
                        reservationTime: selectedTime,
                        isAutoReservation: false,
                    },
                },
            });
        }
    };

    // 자동 예약할지 안할지
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (hospitalDetail && hospitalDetail !== null) {
            const weekDays = [
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
            ];

            const day = new Date(selectedDate);

            const whichDay = weekDays[day.getDay()];

            const formatBusinessHours = (hours) => {
                if (hours === "휴무") {
                    return { holiday: true };
                } else {
                    const [open, close] = hours.split(" ~ ");
                    return { open, close, holiday: false };
                }
            };

            setOpenDate(
                formatBusinessHours(hospitalDetail.businessHours[whichDay])
            );
        }
    }, [selectedTime, selectedDate, hospitalDetail]);

    useEffect(() => {
        const fetchHospitalDetail = async () => {
            try {
                const res = await getDetail({ hospitalId: state.hospitalId });

                if (res.data.code === "COMMON200" || res.data.status === 200) {
                    const hospitalData = res.data.result;

                    setHospitalDetail(hospitalData);
                } else {
                    console.log(res.data.code);
                }
            } catch (error) {
                console.error("Failed to fetch hospital detail:", error);
            }
        };

        fetchHospitalDetail();

        const fetchMoreDetail = async () => {
            try {
                const res = await getMoreDetail({
                    hospitalId: state.hospitalId,
                });

                if (res.data.code === "COMMON200" || res.data.status === 200) {
                    const profileData = res.data.result;

                    setUserInfo(profileData);
                } else {
                    console.log(res.data.code);
                }
            } catch (error) {
                console.error("Failed to fetch hospital detail:", error);
            }
        };

        fetchMoreDetail();
    }, []);

    const handleChatClick = () => {
        navigate("/chat");
      };

    return (
        <>
            <NavBar activeIndex={0}>
                <GeneralContainer>
                    <PathText>{state.text}</PathText>
                </GeneralContainer>
            </NavBar>
            <Frame>
                <Div>
                    <GeneralContainer>
                        <ProfileContainer>
                            <ProfileImg src={profile}></ProfileImg>
                            <NickName>{userInfo ? userInfo.name : ""}</NickName>
                            <TagBox>
                                <TagText>본인</TagText>
                            </TagBox>
                        </ProfileContainer>
                    </GeneralContainer>
                    <StyledHr />
                    <GeneralContainer>
                        <TitleContainer>
                            <CalenderImg src={calender}></CalenderImg>
                            <CalenderText>
                                예약 날짜와 시간을 선택해 주세요.
                            </CalenderText>
                        </TitleContainer>
                    </GeneralContainer>
                    <MyCalendar
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                    ></MyCalendar>

                    {selectedDate !== null ? (
                        !opendDate.holiday ? (
                            <ReserveTime
                                openTime={opendDate.open}
                                closeTime={opendDate.close}
                                // openTime="09:00"
                                // closeTime="13:00"
                                setSelectedTime={setSelectedTime}
                                selectedDate={selectedDate}
                            ></ReserveTime>
                        ) : (
                            <NoTimeText>해당 요일은 휴무일입니다.</NoTimeText>
                        )
                    ) : null}

                    <StyledHr />

                    <GeneralContainer>
                        <TitleContainer>
                            <CalenderImg src={message}></CalenderImg>
                            <CalenderText>
                                진료 시간이 다가오면 문자로 연락드릴게요.
                            </CalenderText>
                        </TitleContainer>

                        <TelWrapper>
                            <TelContainer>
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                                <InputDiv>
                                    <InputComp
                                        type="text"
                                        value={userInfo ? userInfo.phone : ""}
                                        onChange={changeNumber}
                                        disabled={true}
                                    ></InputComp>
                                </InputDiv>
                                <ReceptionText1>수신 허용</ReceptionText1>
                                <CheckBoxStyle>
                                    <Checkbox
                                        icon={<FaCheck style={FaCheckStyle} />}
                                        checked={receptionCheck}
                                        borderRadius="50%"
                                        borderWidth="2.5px"
                                        onChange={handleChange}
                                        borderColor="#005BE2"
                                        style={{ cursor: "pointer" }}
                                        labelStyle={LabelStyle}
                                    />
                                </CheckBoxStyle>
                            </TelContainer>
                            <ReservationText>
                                예약 시간 30분 전에 알려드릴게요!
                            </ReservationText>
                        </TelWrapper>
                    </GeneralContainer>

                    <StyledHr />

                    <GeneralContainer>
                        <TitleContainer>
                            <CalenderImg src={recycle}></CalenderImg>
                            <CalenderText>
                                예약 시간에 오지 못할 경우 다음 시간으로 자동
                                예약 해드려요.
                            </CalenderText>
                        </TitleContainer>
                        <DescriptionContainer>
                            <ReceptionText2>
                                *노쇼 방지 비용이 발생해요! 3번 이상 노쇼일
                                경우, 노쇼 비용은 환불 불가능해요.
                            </ReceptionText2>
                            <ReceptionText2>
                                (노쇼 방지 비용은 진료 금액에서 절감됩니다.)
                            </ReceptionText2>
                        </DescriptionContainer>
                        <ButtonRadioGroup
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        ></ButtonRadioGroup>
                    </GeneralContainer>

                    <NextBtn
                        disabled={
                            selectedDate === null ||
                            selectedTime === null ||
                            selectedOption === null
                        }
                        onClick={nextHandle}
                    >
                        다음
                    </NextBtn>
                </Div>
            </Frame>
            <ChatFixed src={chatFixed} alt="Chat" onClick={handleChatClick} />
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

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const ProfileImg = styled.img`
    width: 1.8rem;
    height: 1.8rem;
`;

const NickName = styled.div`
    margin-left: 0.5rem;
    font-weight: 500;
    font-size: 1em;
`;

const TagBox = styled.div`
    border: 1px solid #1371ff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem 0.4rem;
    margin-left: 0.3rem;
`;

const TagText = styled.p`
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    color: #1371ff;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CalenderImg = styled.img`
    width: 1.8rem;
    height: 1.8rem;
`;

const CalenderText = styled.div`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    margin-left: 0.5rem;
`;

const NoTimeText = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: #808080;
    margin: 3rem 0;
`;

const TelWrapper = styled.div``;

const TelContainer = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputDiv = styled.div`
    margin-left: 0.5rem;
    border: 0.08rem solid #c3c3c3;
    border-radius: 9px;
    width: 14rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const InputComp = styled.input`
    margin-left: 1rem;
    width: 90%;
    height: 100%;
    background: white;
`;

const ReservationText = styled.div`
    color: #979797;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 1rem;
    text-align: center;
`;

const ReceptionText1 = styled.div`
    color: #525252;
    font-weight: 500;
    font-size: 0.9rem;
    margin-left: 0.7rem;
`;

const CheckBoxStyle = styled.div`
    margin: 0rem 0.6rem;
    font-size: 1rem;
    font-weight: 500;
`;

const FaCheckStyle = {
    color: "#1371FF",
    fontSize: "13px",
};

const LabelStyle = { marginLeft: "1rem", userSelect: "none" };

const ReceptionText2 = styled.div`
    color: #979797;
    font-size: 0.8rem;
    font-weight: 500;
`;

const DescriptionContainer = styled.div`
    margin-left: 2rem;
    margin-top: 0.4rem;
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

const ChatFixed = styled.img`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  z-index: 1000;
`;

export default Reservation;
