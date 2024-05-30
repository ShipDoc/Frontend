import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HospitalComponent from "../../components/MyPage/Apointment/ApointmentHospital";
import styled from "styled-components";
import HospitalMap from "../../components/MyPage/HospitalMap";
import Modal from "../../components/MyPage/Apointment/Modal";
import { useNavigate, useLocation } from "react-router-dom";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import {
    getReservations,
    deleteReservations,
} from "../../apis/api/reservations";
import chatFixed from "../../assets/images/chat/chatFixed.svg";

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
};

const Detail = () => {
    const locationState = useLocation();
    const { reservationId } = locationState.state || {};
    const [reservationDetail, setReservationDetail] = useState(null);
    const { location, error } = useGeoLocation(geolocationOptions);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleBtn = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmModal = async () => {
        if (reservationDetail && reservationDetail.reservationId) {
            console.log("Reservation ID:", reservationDetail.reservationId); // 예약 ID 출력
            try {
                const response = await deleteReservations(
                    reservationDetail.reservationId
                );
                if (response.isSuccess) {
                    alert("예약이 취소되었습니다.");
                    navigate("/mypage/apointment", { replace: true }); // 페이지 새로고침
                } else {
                    alert(`예약 취소 실패: ${response.message}`);
                }
            } catch (error) {
                console.error("예약 취소 실패:", error);
                alert("예약 취소 중 오류가 발생했습니다.");
            }
        } else {
            alert("예약 정보를 찾을 수 없습니다.");
        }
        setShowModal(false);
    };

    useEffect(() => {
        const fetchReservationDetail = async () => {
            try {
                const res = await getReservations();

                if (res.isSuccess) {
                    const reservation = res.result.reservations.find(
                        (r) => r.id === reservationId
                    );
                    console.log("예약 세부 정보:", reservation); // 예약 세부 정보 출력
                    setReservationDetail(reservation);
                } else {
                    console.log(res.code);
                }
            } catch (error) {
                console.error("Failed to fetch reservation detail:", error);
            }
        };

        fetchReservationDetail();
    }, [reservationId]);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (!reservationDetail) {
        return <div>Loading...</div>;
    }

    const handleChatClick = () => {
        navigate("/chat");
    };

    return (
        <>
            <NavBar>
                마이페이지 &gt; 병원 예약내역 보기 &gt;{" "}
                {reservationDetail.hospitalName}
            </NavBar>
            <Frame>
                <Div>
                    <HospitalComponent
                        name={reservationDetail.hospitalName}
                        user={reservationDetail.name}
                        date={formatDateTime(reservationDetail.reservationTime)}
                        sms={reservationDetail.patientPhone ? "O" : "X"}
                        auto={reservationDetail.autoReservation ? "O" : "X"}
                        telNum={reservationDetail.hospitalPhone}
                        imageUrl={
                            reservationDetail.imageUrl || "defaultImageURL"
                        } // 기본 이미지 URL 설정
                    />
                    <StyledHr />
                    <HospitalMap
                        hospitalAddress={reservationDetail.hospitalAddress}
                        kakaoUrl={reservationDetail.kakaoUrl}
                        hospitalLatitude={reservationDetail.hospitalLatitude}
                        hospitalLongitude={reservationDetail.hospitalLongitude}
                    />
                    <StyledHr />
                    <MainContainer>
                        <GeneralContainer>
                            <SubTitle>실시간 진료 대기실 현황</SubTitle>
                            <TagContainer>
                                <PeopleNumText>진료실</PeopleNumText>
                                <TagBox>
                                    <TagText>
                                        <span style={{ color: "#E22222" }}>
                                            {
                                                reservationDetail.estimatedWaitPatient
                                            }
                                            명
                                        </span>{" "}
                                        대기중
                                    </TagText>
                                </TagBox>
                            </TagContainer>
                            <ReservationBtn onClick={handleBtn}>
                                <ButtonText>
                                    <span>예약 취소하기</span>
                                </ButtonText>
                            </ReservationBtn>
                        </GeneralContainer>
                    </MainContainer>
                </Div>
            </Frame>
            <Modal
                show={showModal}
                handleClose={handleCloseModal}
                handleConfirm={handleConfirmModal}
            />
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

const ChatFixed = styled.img`
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    z-index: 1000;
`;

export default Detail;
