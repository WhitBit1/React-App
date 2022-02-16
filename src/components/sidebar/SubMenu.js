import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
  
const SidebarLink = styled(Link)`
  display: flex;
  color: aqua;
  font-family: "Sniglet";
  font-weight: less bold;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 70px;
  text-decoration: none;
  font-size: 20px;
  
  &:hover {
    border-left: 10px dotted yellow;
    cursor: pointer;
    text-decoration: none; 
    color: #FFCCFF;
  }
`;
  
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
  
const DropdownLink = styled(Link)`
  border-radius:6px;
  height: 55px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: yellow;
  font-size: 18px;
  
  &:hover {
    background: grey;
    cursor: pointer;
    text-decoration: none;
    color: white;

  }
`;
  
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <SidebarLink to={item.path} 
      onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
  
export default SubMenu;