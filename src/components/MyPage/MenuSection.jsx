import React, { useState } from 'react';
import styled from 'styled-components';
import family from "../../assets/images/family.svg";
import familyBlue from "../../assets/images/familyBlue.svg";
import hospital from "../../assets/images/hospitalIcon.svg";
import hospitalWhite from "../../assets/images/hospitalWhite.svg";
import pencilblue from "../../assets/images/pencilblue.svg";
import pencilWhite from "../../assets/images/pencilWhite.svg";

const MenuSection = () => {
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredMenuItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredMenuItem(null);
  };

  return (
    <Menu>
      <MenuItem 
        onMouseEnter={() => handleMouseEnter('family')}
        onMouseLeave={handleMouseLeave}
      >
        <MenuIcon>
          <img src={hoveredMenuItem === 'family' ? family : familyBlue} alt="family" />
        </MenuIcon>
        가족관리
      </MenuItem>
      <MenuItem 
        onMouseEnter={() => handleMouseEnter('hospital')}
        onMouseLeave={handleMouseLeave}
      >
        <MenuIcon>
          <img src={hoveredMenuItem === 'hospital' ? hospitalWhite : hospital} alt="hospital"/>
        </MenuIcon>
        찜한 병원
      </MenuItem>
      <MenuItem 
        onMouseEnter={() => handleMouseEnter('pencil')}
        onMouseLeave={handleMouseLeave}
      >
        <MenuIcon>
          <img src={hoveredMenuItem === 'pencil' ? pencilWhite : pencilblue} alt="pencil"/>
        </MenuIcon>
        나의 글 보기
      </MenuItem>
    </Menu>
  );
};

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background: linear-gradient(180deg, #2E7EF3 0%, #7BB8F0 100%);
  padding: 4rem;
  box-shadow: 0px -8px 22.7px 0px rgba(0, 91, 226, 0.17) inset;
`;

const MenuItem = styled.div`
  width: 35vw;
  height: 10vh;
  background-color: #fff;
  padding: 1rem 2rem;
  border: 2px solid #FFF;
  border-radius: 1rem;
  margin: 1.2rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1371FF;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background-color: #3684F4;
    color: #fff;
  }
`;

const MenuIcon = styled.div`
  margin-right: 1.5rem;
`;

export default MenuSection;
