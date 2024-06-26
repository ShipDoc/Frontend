import React, { useState, useRef, useEffect } from "react";
import HospitalComponent from "../../components/ReserveHealth/HospitalComponent";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import SortModal from "../../components/Main/SortModal";
import locationIcon from "../../assets/icons/locationIcon.svg";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import { getHealthCareList } from "../../apis/api/healthCare";
import { useNavigate } from "react-router-dom";

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
};

const sortOptionsMap = {
    "가까운 순": "DISTANCE",
    "별점 높은 순": "SCORE",
    "리뷰 많은 순": "REVIEW",
};

const sortOptionsReverseMap = {
    DISTANCE: "가까운 순",
    SCORE: "별점 높은 순",
    REVIEW: "리뷰 많은 순",
};

const Health = () => {
    const { location, error } = useGeoLocation(geolocationOptions);

    const [path, setPath] = useState("건강검진 > 건강검진 예약하기");
    const [myLocationName, setMyLocationName] = useState("성북구");
    const [hospitalList, setHospitalList] = useState([]);
    const [size, setSize] = useState(3);
    const [sortOption, setSortOption] = useState("DISTANCE");
    const [displaySortOption, setDisplaySortOption] = useState("가까운 순");

    const [modal, setModal] = useState(false);
    const modalRef = useRef();
    const buttonRef = useRef();
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    useEffect(() => {
        if (buttonRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            setModalPosition({
                top: buttonRect.bottom + window.scrollY,
                left: buttonRect.left + buttonRect.width / 2,
            });
        }
    }, [modal]);

    useEffect(() => {
        if (location.latitude && location.longitude) {
            console.log(location);
            const fetchHospitalList = async () => {
                try {
                    const res = await getHealthCareList({
                        latitude: location.latitude,
                        longitude: location.longitude,
                        size: size,
                        sort: sortOption,
                    });

                    if (res.data.code === "COMMON200") {
                        setHospitalList(res.data.result.hospitalList);
                    } else {
                        console.log(res.data.code);
                    }
                } catch (error) {
                    console.error("Failed to fetch hospital list:", error);
                }
            };

            fetchHospitalList();
        } else {
            console.log(location);
        }
    }, [location, size, sortOption]);

    const handleSelectOption = (option) => {
        const selectedSortOption = sortOptionsMap[option];
        setSortOption(selectedSortOption);
        setDisplaySortOption(option);
        console.log("Selected Sort Option:", selectedSortOption);
        setModal(false);
    };

    const handleLoadMore = () => {
        setSize((prevSize) => prevSize + 3);
    };

    return (
        <>
            <NavBar activeIndex={1}>
                <GeneralContainer>
                    <PathText>홈 &gt; 건강검진 &gt; 건강검진 예약하기</PathText>
                </GeneralContainer>
            </NavBar>
            <Frame>
                <Div>
                    <SortContainer>
                        <NearHospitalText>
                            &lt; 건강검진 가능 병원
                        </NearHospitalText>

                        <ToggleDiv>
                            <LocationContainer>
                                <LocationImg src={locationIcon}></LocationImg>
                                <LocationText>{myLocationName}</LocationText>
                            </LocationContainer>
                            <HamburgerContainer
                                ref={buttonRef}
                                onClick={toggleModal}
                            >
                                <SortText>{displaySortOption}▼</SortText>
                            </HamburgerContainer>
                        </ToggleDiv>
                    </SortContainer>

                    {hospitalList.map((data, idx) => (
                        <HospitalComponent
                            key={hospitalList[idx].hospitalId}
                            data={data}
                            path={path}
                        />
                    ))}
                    {hospitalList.length === 0 && (
                        <NoListText>
                            건강검진이 가능한 병원이 없습니다.
                        </NoListText>
                    )}
                    <ReservationBtn onClick={handleLoadMore}>
                        더보기
                    </ReservationBtn>
                    {modal && (
                        <div
                            ref={modalRef}
                            style={{
                                position: "absolute",
                                top: modalPosition.top,
                                left: modalPosition.left,
                                transform: "translate(-50%)",
                                zIndex: 10,
                            }}
                        >
                            <SortModal onSelect={handleSelectOption} />
                        </div>
                    )}
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
    font-weight: 500;
    font-size: 1rem;
`;

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const ToggleDiv = styled.div`
    display: flex;
    align-items: center;
`;

const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    color: #1371ff;
    border: 1.7px solid #1371ff;
    border-radius: 30px;
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-weight: 700;
`;

const LocationImg = styled.img``;
const LocationText = styled.div`
    margin-left: 0.2rem;
`;

const NearHospitalText = styled.p`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const HamburgerContainer = styled.div`
    margin-left: 0.7rem;
    position: relative;
    cursor: pointer;
    background: #1371ff;
    border-radius: 14px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const SortText = styled.div`
    padding: 0.3rem 0.6rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
`;

const NoListText = styled.div`
    margin: 7rem 0;
    font-size: 1rem;
    color: #808080;
`;

const ReservationBtn = styled.button`
    margin-top: 2rem;
    bottom: 0.5rem;
    background-color: #1371ff;
    color: white;
    font-weight: 800;
    font-size: 1.2rem;
    border-radius: 15px;
    width: 100%;
    height: 3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export default Health;
