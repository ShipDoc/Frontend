import React, { useState } from "react";
import styled from "styled-components";

const ReserveTime = ({
    openTime,
    closeTime,
    handleButtonClick,
    selectedTime,
}) => {
    const generateTimeSlots = (open, close) => {
        const slots = [];
        let currentTime = new Date(open);
        const closeTime = new Date(close);

        while (currentTime < closeTime) {
            slots.push(new Date(currentTime));
            currentTime.setMinutes(currentTime.getMinutes() + 30);
        }

        return slots;
    };

    const formatTime = (date, isAfternoon) => {
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        if (isAfternoon) {
            return `${hours.toString().padStart(2, "0")}:${minutes}`;
        } else {
            const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
            return `${formattedHours}:${minutes}`;
        }
    };

    const openDate = new Date(`1970-01-01T${openTime}:00`);
    const closeDate = new Date(`1970-01-01T${closeTime}:00`);

    const timeSlots = generateTimeSlots(openDate, closeDate);
    const morningSlots = timeSlots.filter((slot) => slot.getHours() < 12);
    const afternoonSlots = timeSlots.filter((slot) => slot.getHours() >= 12);

    const renderTimeButtons = (slots, isAfternoon) => {
        const buttons = slots.map((slot, index) => (
            <RadioButton
                key={index}
                isSelected={selectedTime === slot.toISOString()}
                onClick={() => handleButtonClick(slot.toISOString())}
            >
                {formatTime(slot, isAfternoon)}
            </RadioButton>
        ));

        const totalButtons = buttons.length;
        const rows = Math.ceil(totalButtons / 4);
        const spacersNeeded = rows * 4 - totalButtons;

        for (let i = 0; i < spacersNeeded; i++) {
            buttons.push(<Spacer key={`spacer-${i}`} />);
        }

        return buttons;
    };

    return (
        <>
            <ButtonGroup>
                <SectionTitle>오전</SectionTitle>
                {renderTimeButtons(morningSlots, false)}
            </ButtonGroup>
            <ButtonGroup>
                <SectionTitle>오후</SectionTitle>
                {renderTimeButtons(afternoonSlots, true)}
            </ButtonGroup>
        </>
    );
};

const ButtonGroup = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto;
`;

const SectionTitle = styled.h3`
    width: 100%;
    text-align: start;
    margin: 10px 0;
    font-weight: 500;
    font-size: 1rem;
`;

const RadioButton = styled.button`
    background-color: ${(props) => (props.isSelected ? "#1371FF" : "#ffffff")};
    color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
    border: ${(props) => (props.isSelected ? "none" : "1px solid #C3C3C3")};
    border-radius: 9px;
    padding: 10px 0;
    margin: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
    flex: 1 0 21%;

    &:hover {
        background-color: #1371ff;
        color: #ffffff;
    }
`;

const Spacer = styled.div`
    flex: 1 0 21%;
    margin: 5px;
`;

export default ReserveTime;
