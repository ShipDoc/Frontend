import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import HospitalComponent from "../../components/detail/HospitalComponent";
import styled from "styled-components";
import HospitalMap from "../../components/detail/HospitalMap";
import Star from "../../components/common/Star";
import profile from "../../assets/images/profile.svg";
import logoImg from "../../assets/images/logoImg.svg";
import { useNavigate } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();

    // 진료중, 휴게시간, 진료마감 구분
    const [ingNum, setIngNum] = useState(0);

    const [subjectTags, setSubjectTags] = useState([
        "Test 1",
        "Test 2",
        "Test 3",
    ]);

    const [peopleNum, setPeopleNum] = useState(0);

    const [starRate, setStarRate] = useState(3.5);

    const [username, setUsername] = useState("어디서나 777");

    const [description, setDescription] =
        useState("과잉 진료하지 않아서 좋아요.");

    const IngText = () => {
        const texts = ["현재 진료중", "휴게시간", "진료마감"];

        const textStyle = {
            color: "",
            fontWeight: "600",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            marginLeft: "0.5rem",
        };

        if (ingNum === 0) {
            textStyle.color = "#32BF00";
        } else if (ingNum === 1) {
            textStyle.color = "#1371FF";
        } else {
            textStyle.color = "#FF0000";
        }

        return (
            <div style={textStyle}>
                <div style={{ fontSize: "1.5rem" }}>{"•"}</div>
                <div>{texts[ingNum]}</div>
            </div>
        );
    };

    const handleBtn = () => {
        navigate("/detail/reservation");
    };

    return (
        <>
            <NavBar></NavBar>
            <Frame>
                <Div>
                    <HospitalComponent name="연세이빈후과"></HospitalComponent>
                    <StyledHr />
                    <HospitalMap></HospitalMap>
                    <StyledHr />
                    <GeneralContainer>
                        <IngContainer>
                            <SubTitle>진료시간</SubTitle>

                            <IngText></IngText>
                        </IngContainer>
                    </GeneralContainer>
                    <StyledHr />
                    <GeneralContainer>
                        <SubTitle>진료과목</SubTitle>
                        <TagContainer>
                            {subjectTags.map((text, index) => {
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
                            <Star rate={starRate}></Star>
                        </StarContainer>
                        <ProfileContainer>
                            <ProfileImg src={profile}></ProfileImg>
                            <NickName>{username}</NickName>
                        </ProfileContainer>
                        <Description>{description}</Description>
                    </GeneralContainer>
                    <ReviewButton>더 많은 리뷰 보러가기</ReviewButton>
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

const SubTitle = styled.div`
    font-weight: 500;
    font-size: 1rem;
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

export default Detail;
