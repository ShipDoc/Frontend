import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HospitalComponent from "../../components/detail/HospitalComponent";
import styled from "styled-components";
import HospitalMap from "../../components/detail/HospitalMap";
import Star from "../../components/common/Star";
import profile from "../../assets/images/profile.svg";
import logoImg from "../../assets/images/logoImg.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import { getDetail } from "../../apis/api/detail";

const Detail = () => {
    // "홈 > 예약하기 와 같은 텍스트 받아오기"
    const { state } = useLocation();
    const [path, setPath] = useState(state ? state.pathText : "");

    const [hospitalDetail, setHospitalDetail] = useState({});

    const [location, setLocation] = useState({});

    const [clinic, setClinic] = useState([]);

    const navigate = useNavigate();

    // 진료중, 휴게시간, 진료마감 구분
    const [ingNum, setIngNum] = useState("OPEN");

    const [subjectTags, setSubjectTags] = useState([
        "안심 실명제",
        "분야별 협진",
        "전담 회복실",
    ]);

    // 대기 인원
    const [peopleNum, setPeopleNum] = useState(0);

    // 별점
    const [starRate, setStarRate] = useState(3.7);

    // 유저 이름
    const [username, setUsername] = useState("어디서나 777");
    const [reviewList, setReviewList] = useState(null);

    const [hospitalName, setHospitalName] = useState("");

    const [description, setDescription] =
        useState("과잉 진료하지 않아서 좋아요.");

    const IngText = () => {
        const texts = {
            OPEN: "현재 진료중",
            CLOSED: "진료마감",
            BREAK_TIME: "휴게시간",
        };

        const textStyle = {
            color: "",
            fontWeight: "600",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            marginLeft: "0.5rem",
        };
        if (ingNum === "OPEN") {
            textStyle.color = "#32BF00";
        } else if (ingNum === "CLOSED") {
            textStyle.color = "#FF0000";
        } else {
            textStyle.color = "#1371FF";
        }

        return (
            <div style={textStyle}>
                <div style={{ fontSize: "1.5rem" }}>{"•"}</div>
                <div>{texts[ingNum]}</div>
            </div>
        );
    };

    const handleBtn = async () => {
        try {
            const res = await getDetail({ hospitalId: state.id });
            if (res.data.code === "COMMON200" || res.data.status === 200) {
                const hospitalData = res.data.result;

                navigate("/detail/reservation", {
                    state: {
                        text: `홈 > ${path} > 병원 예약하기`,
                        hospitalId: hospitalData.hospitalId,
                    },
                });
            } else {
                console.log(res.data.code);
            }
        } catch (error) {
            console.error("Failed to fetch hospital detail:", error);
        }
    };

    const reviewPage = () => {
        navigate("/detail/review", {
            state: {
                hospitalId: state.id,
            },
        });
    };

    const makeClinicHours = () => {
        if (!hospitalDetail || !hospitalDetail.businessHours) {
            return;
        }

        const clinics = [];

        // 요일 순서 배열
        const weekDays = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
        ];

        const koreanDays = {
            monday: "월",
            tuesday: "화",
            wednesday: "수",
            thursday: "목",
            friday: "금",
            saturday: "토",
            sunday: "일",
        };

        // 현재 요일을 가져옴
        const today = new Date();

        // -1 이면 일요일
        const todayDay =
            today.getDay() - 1 === -1
                ? weekDays[weekDays.length - 1]
                : weekDays[today.getDay() - 1];

        // 오늘의 영업 시간과 휴게 시간 출력
        const todayBusinessHours = hospitalDetail.businessHours[todayDay];
        const breakTime = hospitalDetail.businessHours.breakTime;

        clinics.push({
            day: "오늘",
            time: `${todayBusinessHours} | ${breakTime} 휴게 시간`,
        });

        // 영업 시간 그룹화 함수
        function groupBusinessHours(businessHours) {
            const groupedHours = {};
            for (const day of weekDays) {
                const hours = businessHours[day];

                if (!groupedHours[hours]) {
                    groupedHours[hours] = [];
                }
                groupedHours[hours].push(day);
            }
            return groupedHours;
        }

        // 그룹화된 영업 시간과 휴무일 출력
        const groupedHours = groupBusinessHours(hospitalDetail.businessHours);
        for (const [hours, days] of Object.entries(groupedHours)) {
            const dayNames = days.map((day) => koreanDays[day]).join(", ");

            if (hours === "휴무") {
                clinics.push({
                    day: dayNames,
                    time: ` (매 주 ${dayNames}요일)`,
                    isHoliday: true,
                });
            } else {
                clinics.push({
                    day: dayNames,
                    time: `${hours} | ${breakTime} 휴게 시간`,
                });
            }
        }

        setClinic(clinics);
    };

    useEffect(() => {
        const fetchHospitalDetail = async () => {
            try {
                const res = await getDetail({ hospitalId: state.id });

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
    }, [state]);

    useEffect(() => {
        if (hospitalDetail) {
            setPeopleNum(hospitalDetail.waitingCount || 0);
            setStarRate(hospitalDetail.totalRate);

            setHospitalName(hospitalDetail.placeName || "");
            setLocation({
                latitude: hospitalDetail.latitude,
                longitude: hospitalDetail.longitude,
            });

            setSubjectTags(
                hospitalDetail.department ? [hospitalDetail.department] : null
            );

            console.log(hospitalDetail);
            setReviewList(hospitalDetail.reviewList);

            setIngNum(hospitalDetail.isOpenNow);

            makeClinicHours();
        }
    }, [hospitalDetail]);

    return (
        <>
            <NavBar activeIndex={0}>
                <GeneralContainer>
                    <PathText>홈 &gt; {path}</PathText>
                </GeneralContainer>
            </NavBar>
            <Frame>
                <Div>
                    <HospitalComponent
                        hospitalDetail={hospitalDetail}
                        data={state.data}
                    ></HospitalComponent>
                    <StyledHr />
                    <HospitalMap
                        data={location}
                        address={hospitalDetail.address}
                        placeUrl={hospitalDetail.placeUrl}
                    ></HospitalMap>
                    <StyledHr />
                    <GeneralContainer>
                        <IngContainer>
                            <SubTitle>진료시간</SubTitle>

                            <IngText></IngText>
                        </IngContainer>
                        <ClinicWrapper>
                            {clinic.map((c, idx) => {
                                return (
                                    <ClinicTimeContainer key={idx}>
                                        <ClinicTimeText>{c.day}</ClinicTimeText>
                                        <ClinicTime>
                                            {c.isHoliday ? (
                                                <>
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        정기휴무
                                                    </span>
                                                    {c.time}
                                                </>
                                            ) : (
                                                c.time
                                            )}
                                        </ClinicTime>
                                    </ClinicTimeContainer>
                                );
                            })}
                        </ClinicWrapper>
                    </GeneralContainer>
                    <StyledHr />
                    <GeneralContainer>
                        <SubTitle>진료과목</SubTitle>
                        <TagContainer>
                            {subjectTags &&
                                subjectTags.map((text, index) => {
                                    return (
                                        <TagBox key={index}>
                                            <TagText>{text}</TagText>
                                        </TagBox>
                                    );
                                })}
                        </TagContainer>
                    </GeneralContainer>
                    <StyledHr />
                    <GeneralContainer>
                        <SubTitle>실시간 진료 대기실 현황</SubTitle>
                        <TagContainer>
                            <PeopleNumText>진료실</PeopleNumText>
                            <TagBox>
                                <TagText>
                                    <span style={{ color: "#E22222" }}>
                                        {peopleNum}명
                                    </span>{" "}
                                    대기중
                                </TagText>
                            </TagBox>
                        </TagContainer>
                    </GeneralContainer>
                    <StyledHr />
                    <GeneralContainer>
                        <StarContainer>
                            <SubTitle>리뷰</SubTitle>
                            <Star
                                id={state.id}
                                textColor="#1371FF"
                                rate={starRate}
                            ></Star>
                        </StarContainer>

                        {reviewList
                            ? (reviewList.length !== 0 && (
                                  <>
                                      <ProfileContainer>
                                          <ProfileImg
                                              src={profile}
                                          ></ProfileImg>
                                          <NickName>
                                              {reviewList.length !== 0
                                                  ? reviewList[0].name
                                                  : null}
                                          </NickName>
                                      </ProfileContainer>
                                      <Description>
                                          {reviewList.length !== 0
                                              ? reviewList[0].content
                                              : null}
                                      </Description>
                                  </>
                              )) ||
                              (reviewList.length === 0 && (
                                  <NoReviewContent>
                                      리뷰가 아직 남겨지지 않았어요.
                                  </NoReviewContent>
                              ))
                            : null}
                    </GeneralContainer>
                    <ReviewButton onClick={reviewPage}>
                        더 많은 리뷰 보러가기
                    </ReviewButton>
                    <ReservationBtn onClick={handleBtn}>
                        <ButtonText>
                            <span>병원 예약하기</span>
                            <LogoImg src={logoImg}></LogoImg>
                        </ButtonText>
                    </ReservationBtn>
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
    margin: 1.6rem 0;
`;

const GeneralContainer = styled.div`
    text-align: start;
    margin-left: 1rem;
    align-items: center;
`;

const PathText = styled.div`
    color: #808080;
    font-size: 0.75rem;
    margin-left: 9rem;
    margin-bottom: 1rem;
`;

const SubTitle = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
`;

const IngContainer = styled.div`
    display: flex;
    align-items: center;
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

const StarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1vw;
`;

const ReviewButton = styled.div`
    border: 0.08rem solid #000;
    border-radius: 20px;
    width: 80%;
    padding: 0.4rem 0;
    text-align: center;

    margin: 1rem auto 3rem auto;
    font-weight: 700;
    cursor: pointer;
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const ProfileImg = styled.img``;

const NickName = styled.div`
    margin-left: 0.5rem;
    font-weight: 500;
    font-size: 1em;
`;

const Description = styled.div`
    margin-top: 1rem;
    margin-left: 2.3rem;
    color: #949494;
`;

const ReservationBtn = styled.button`
    position: fixed;
    transform: translate(-50%, -50%);
    bottom: 0.5rem;
    z-index: 100;
    background-color: #1371ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 20px;
    width: 50%;
    height: 3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ButtonText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    margin-left: 0.3rem;
`;

const ClinicWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const ClinicTimeContainer = styled.div``;

const ClinicTimeText = styled.div`
    margin-top: 1rem;
    font-weight: 500;
`;

const ClinicTime = styled.div`
    margin-top: 0.4rem;
    font-weight: 500;
    color: #8a8a8a;
    font-size: 0.9rem;
`;

const NoReviewContent = styled.div`
    margin: 3rem 0;
    font-size: 1.1rem;
    text-align: center;
    color: #808080;
    font-weight: 400;
`;

export default Detail;
