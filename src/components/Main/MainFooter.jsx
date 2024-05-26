import styled from "styled-components";
import HamburgerDiv from "../../assets/images/hamburgerdiv.svg";
import hamburger from "../../assets/images/hamburger.svg";
import locationBoxImg from "../../assets/images/locationBox.svg";
import locationImg from "../../assets/images/locationImg.svg";
import { useState, useRef, useEffect } from "react";
import HospitalComponent from "./HospitalComponent";
import SearchBar from "./SearchBar";
import SortModal from "./SortModal";

const FooterWrapper = styled.div`
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(46, 126, 243, 0.88) 0%,
        #7bb8f0 100%
    );
    margin-top: 7vh;
    margin-bottom: 10vh;
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

const PartitionComponent = styled.div`
    height: 0.3vh;
    stroke-width: 2px;
    stroke: #fff;
    width: 100%;
    background: #fff;
`;

export default function MainFooter({ checkup }) {
    const [location, setLocation] = useState("지역");
    const [modal, setModal] = useState(false);
    const modalRef = useRef();

    const toggleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <FooterWrapper>
            <FooterContainer>
                {checkup && <SearchBar placeholder="건강검진 병원 찾기" />}
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
                            <LocationText>{location}</LocationText>
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
                            <SortModal />
                        </div>
                    )}
                </div>
                <div>
                    <HospitalComponent />
                    <PartitionComponent />
                    <HospitalComponent />
                </div>
            </FooterContainer>
        </FooterWrapper>
    );
}
