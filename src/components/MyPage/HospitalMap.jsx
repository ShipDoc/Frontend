import React, { useState, useEffect } from "react";
import hospitalMarker from "../../assets/icons/hospitalMarker.svg";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const HospitalMap = ({ hospitalAddress, kakaoUrl, hospitalLatitude, hospitalLongitude }) => {
    const [coordinate, setCoordinate] = useState({
        lat: hospitalLatitude, 
        lng: hospitalLongitude, 
    });

    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(hospitalAddress);
        } catch (error) {
            console.log("실패");
        }
    };

    const handleMapView = () => {
        window.open(kakaoUrl, "_blank", "noopener, noreferrer");
        console.log(kakaoUrl);
    };

    return (
        <HospitalMapContainer>
            <Titlecontainer>
                <img src={hospitalMarker} alt="hospital marker" />
                <ImgTitle>병원 위치</ImgTitle>
            </Titlecontainer>
            <AddressAndBtnContainer>
                <AddressContainer>
                    <div>{hospitalAddress}</div>
                    <CopyAddress onClick={handleCopyClipBoard}>복사</CopyAddress>
                </AddressContainer>
                <AddressBtn onClick={handleMapView}>지도보기</AddressBtn>
            </AddressAndBtnContainer>
            <MapContainer>
                <Map center={coordinate} style={{ width: "100%", height: "360px" }}>
                    <MapMarker position={coordinate}></MapMarker>
                </Map>
            </MapContainer>
        </HospitalMapContainer>
    );
};

const HospitalMapContainer = styled.div``;

const Titlecontainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
`;

const ImgTitle = styled.div`
    margin-left: 0.5rem;
    font-weight: 600;
`;

const AddressAndBtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AddressContainer = styled.div`
    display: flex;
    color: #808080;
    font-size: 0.75rem;
`;

const CopyAddress = styled.div`
    cursor: pointer;
    color: #57aeff;
    margin-left: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;

const AddressBtn = styled.button`
    background-color: #1371ff;
    color: white;
    font-weight: 500;
    font-size: 0.75rem;
    border-radius: 5px;
    padding: 0.15rem 0.5rem;
`;

const MapContainer = styled.div`
    border: 1px solid black;
    margin-top: 0.7rem;
`;

export default HospitalMap;
