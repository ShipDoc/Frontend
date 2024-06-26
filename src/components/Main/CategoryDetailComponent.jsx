import styled from "styled-components";
import stethoscopeImg from "../../assets/images/stethoscope.svg";
import coldImg from "../../assets/images/cold.svg";
import healthCareListImg from "../../assets/images/healthCareList.svg";
import reservationImg from "../../assets/images/reservation.svg";
import { useNavigate } from "react-router-dom";

const CategoryDetailButtonContainer = styled.div`
    margin-top: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
`;

const CategoryDetailButtonBox = styled.div`
    width: 19vw;
    height: 15vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1.5rem;
    background: ${({ home, checkup }) => {
        return home ? "#1371FF" : checkup ? "#7BB8F0" : "none";
    }};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const SearchHospitalBoldText = styled.p`
    color: #fff;
    text-align: center;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: 150%; /* 1.5rem */
`;

const SearchHospitalText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    display: inline;
`;

const HealthCareText = styled.p`
    color: #fff;
    text-align: center;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    font-family: Pretendard;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

export default function CategoryDetailComponent({ home, checkup }) {
    const navigate = useNavigate();

    const handleGoSearchHospitalBySymptom = () => {
        navigate("/SearchHospitalBySymptom");
    };

    const handleGoSearchHospitalBySubject = () => {
        navigate("/SearchHospitalBySubject");
    };

    const handleGoHealthCareHistory = () => {
        navigate("/HealthCare/History");
    };

    const handleGoHealthReservation = () => {
        navigate("/health");
    };

    return (
        <>
            {home && (
                <CategoryDetailButtonContainer>
                    <CategoryDetailButtonBox
                        home={home}
                        onClick={handleGoSearchHospitalBySubject}
                    >
                        <img src={stethoscopeImg} alt="stethoscopeImg" />
                        <SearchHospitalBoldText>
                            진료과목
                            <SearchHospitalText>
                                으로 <br />
                                병원찾기
                            </SearchHospitalText>
                        </SearchHospitalBoldText>
                    </CategoryDetailButtonBox>

                    <CategoryDetailButtonBox
                        home={home}
                        onClick={handleGoSearchHospitalBySymptom}
                    >
                        <img src={coldImg} alt="coldImg" />
                        <SearchHospitalBoldText>
                            증상
                            <SearchHospitalText>
                                으로 <br />
                                병원찾기
                            </SearchHospitalText>
                        </SearchHospitalBoldText>
                    </CategoryDetailButtonBox>
                </CategoryDetailButtonContainer>
            )}
            {checkup && (
                <CategoryDetailButtonContainer>
                    <CategoryDetailButtonBox
                        checkup={checkup}
                        onClick={handleGoHealthCareHistory}
                    >
                        <img src={healthCareListImg} alt="healthCareListImg" />
                        <HealthCareText>
                            건강검진
                            <br />
                            내역보기
                        </HealthCareText>
                    </CategoryDetailButtonBox>

                    <CategoryDetailButtonBox
                        checkup={checkup}
                        onClick={handleGoHealthReservation}
                    >
                        <img src={reservationImg} alt="healthCareListImg" />
                        <HealthCareText>
                            건강검진
                            <br />
                            예약하기
                        </HealthCareText>
                    </CategoryDetailButtonBox>
                </CategoryDetailButtonContainer>
            )}
        </>
    );
}
