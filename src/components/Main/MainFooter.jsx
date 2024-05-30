import styled from "styled-components";
import HamburgerDiv from "../../assets/images/hamburgerdiv.svg";
import hamburger from "../../assets/images/hamburger.svg";
import locationBoxImg from "../../assets/images/locationBox.svg";
import locationImg from "../../assets/images/locationImg.svg";
import { useState, useRef, useEffect } from "react";
import HospitalComponent from "./HospitalComponent";
import SearchBar from "./SearchBar";
import SortModal from "./SortModal";
import { useGeoLocation } from "../../utils/hooks/useGeoLocation";
import { getHealthCareList } from "../../apis/api/healthCare";
import { getHospitalList } from "../../apis/api/search";

const FooterWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(46, 126, 243, 0.88) 0%,
        #7bb8f0 100%
    );
    margin-top: 7vh;
    margin-bottom: 10vh;
    padding-top: 1rem;
`;

const FooterContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const NearHospitalText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const HamburgerContainer = styled.div`
    position: relative;
    width: max-content;
    cursor: pointer;
`;

const LocationDiv = styled.div`
    position: relative;
    width: max-content;
`;

const LocationText = styled.p`
    color: #fff;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const NoListText = styled.div`
    margin: 7rem 0;
    font-size: 1rem;
    color: #808080;
    font-family: Pretendard;
`;

const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 10,
    maximumAge: 1000 * 3600 * 24,
};

export default function MainFooter({ checkup }) {
    const { location, error } = useGeoLocation(geolocationOptions);
    const [myLocationName, setMyLocationName] = useState("성북구");
    const [hospitalList, setHospitalList] = useState([]);

    const [modal, setModal] = useState(false);
    const [sortOption, setSortOption] = useState("가까운 순");
    const modalRef = useRef();

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    const handleSelectOption = (option) => {
        setSortOption(option);
        setModal(false);
    };

    const fetchHospitalList = async () => {
        try {
            const res = checkup
                ? await getHealthCareList({
                      latitude: location.latitude,
                      longitude: location.longitude,
                      size: 2,
                      sort: "REVIEW",
                  })
                : await getHospitalList({
                      latitude: location.latitude,
                      longitude: location.longitude,
                      size: 2,
                      sort: "REVIEW",
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

    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetchHospitalList();
        } else {
            console.log(location);
        }
    }, [location, sortOption]);

    return (
        <FooterWrapper>
            <FooterContainer>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "2vh",
                        width: "40vw",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5vw",
                        }}
                    >
                        {checkup ? (
                            <NearHospitalText>
                                내 주변 건강검진 가능 병원
                            </NearHospitalText>
                        ) : (
                            <NearHospitalText>내 주변 병원</NearHospitalText>
                        )}
                        <HamburgerContainer onClick={toggleModal}>
                            <img src={HamburgerDiv} alt="hamburgerDiv" />
                            <img
                                src={hamburger}
                                alt="hamburger"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -60%)",
                                }}
                            />
                        </HamburgerContainer>
                    </div>
                    <LocationDiv>
                        <img src={locationBoxImg} alt="locationBoxImg" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -60%)",
                                width: "100%",
                            }}
                        >
                            <img src={locationImg} alt="locationImg" />
                            <LocationText>{myLocationName}</LocationText>
                        </div>
                    </LocationDiv>
                    {modal && (
                        <div
                            ref={modalRef}
                            style={{
                                position: "absolute",
                                top: "3%",
                                left: "50%",
                                transform: "translate(-50%)",
                                zIndex: 10,
                            }}
                        >
                            <SortModal onSelect={handleSelectOption} />
                        </div>
                    )}
                </div>
                <div>
                    {hospitalList.map((data, idx) => (
                        <HospitalComponent key={idx} data={data} />
                    ))}
                    {hospitalList.length === 0 && (
                        <NoListText>
                            {checkup ? (
                                <NearHospitalText>
                                    건강검진이 가능한 병원이 없습니다.
                                </NearHospitalText>
                            ) : (
                                <NearHospitalText>
                                    내 주변 병원이 없습니다.
                                </NearHospitalText>
                            )}
                        </NoListText>
                    )}
                </div>
            </FooterContainer>
        </FooterWrapper>
    );
}
// MainFooter.jsx
