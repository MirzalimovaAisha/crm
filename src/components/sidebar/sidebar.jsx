import React from "react";
import {
  Logotype,
  NavbarContainer,
  SidebarBetweenWrapper,
  SidebarContainer,
  SidebarItem,
  SidebarItemBetween,
  SidebarLine,
  SidebarNavigationWrapper,
  SidebarProfile,
  SidebarText,
} from "./style";
import { useLocation } from "react-router-dom";

import mapIcon from "../../assets/map-icon.svg";
import usersIcon from "../../assets/users-icon.svg";
import teacherIcon from "../../assets/teacher-icon.svg";
import groupsIcon from "../../assets/group-icon.svg";
import studentIcon from "../../assets/students-icon.svg";
import budgetIcon from "../../assets/budget-icon.svg";
import notificationIcon from "../../assets/notification-icon.svg";
import settingIcon from "../../assets/setting-icon.svg";
import avatarImg from "../../assets/avatar.png";

function Sidebar() {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <div>
      <NavbarContainer />
      <div style={{ width: "256px", position: "relative", height: "" }}>
        <SidebarContainer>
          <div>
            <Logotype>Logotype</Logotype>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "24px",
                padding: "0 12px",
              }}
            >
              <SidebarBetweenWrapper>
                <img src={mapIcon} alt="" />
                <SidebarText>Daegu</SidebarText>
              </SidebarBetweenWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4.47145 5.52925C4.2111 5.2689 3.78899 5.2689 3.52864 5.52925C3.26829 5.7896 3.26829 6.21171 3.52864 6.47206L7.52864 10.4721C7.78899 10.7324 8.2111 10.7324 8.47144 10.4721L12.4714 6.47206C12.7318 6.21171 12.7318 5.7896 12.4714 5.52925C12.2111 5.2689 11.789 5.2689 11.5286 5.52925L8.00004 9.05784L4.47145 5.52925Z"
                  fill="#2C2669"
                />
                <path
                  d="M4.47145 5.52925C4.2111 5.2689 3.78899 5.2689 3.52864 5.52925C3.26829 5.7896 3.26829 6.21171 3.52864 6.47206L7.52864 10.4721C7.78899 10.7324 8.2111 10.7324 8.47144 10.4721L12.4714 6.47206C12.7318 6.21171 12.7318 5.7896 12.4714 5.52925C12.2111 5.2689 11.789 5.2689 11.5286 5.52925L8.00004 9.05784L4.47145 5.52925Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>
            </div>
            <SidebarLine />
            <SidebarNavigationWrapper>
              <SidebarItem to="/leads" active={activeLink === "/leads"}>
                <img src={usersIcon} alt="" />
                <SidebarText>Leads</SidebarText>
              </SidebarItem>
              <SidebarItem to="/teachers" active={activeLink === "/teachers"}>
                <img src={teacherIcon} alt="" />
                <SidebarText>Teachers</SidebarText>
              </SidebarItem>
              <SidebarItem to="/groups" active={activeLink === "/groups"}>
                <img src={groupsIcon} alt="" />
                <SidebarText>Groups</SidebarText>
              </SidebarItem>
              <SidebarItem to="/students" active={activeLink === "/students"}>
                <img src={studentIcon} alt="" />
                <SidebarText>Students</SidebarText>
              </SidebarItem>
              <SidebarItem to="/budget" active={activeLink === "/budget"}>
                <img src={budgetIcon} alt="" />
                <SidebarText>Budget</SidebarText>
              </SidebarItem>
            </SidebarNavigationWrapper>
            <SidebarLine />
            <SidebarNavigationWrapper>
              <SidebarItem
                style={{ height: "40px" }}
                to="/notifications"
                active={activeLink === "/notifications"}
              >
                <img src={notificationIcon} alt="" />
                <SidebarText>Notifications</SidebarText>
              </SidebarItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <SidebarItemBetween active={activeLink === "/settings"}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img src={settingIcon} alt="" />
                    <SidebarText>Settings</SidebarText>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.5286 10.4708C11.7889 10.7311 12.211 10.7311 12.4714 10.4708C12.7317 10.2104 12.7317 9.78829 12.4714 9.52794L8.47136 5.52794C8.21101 5.2676 7.7889 5.2676 7.52856 5.52794L3.52856 9.52794C3.26821 9.78829 3.26821 10.2104 3.52856 10.4708C3.78891 10.7311 4.21101 10.7311 4.47136 10.4708L7.99996 6.94216L11.5286 10.4708Z"
                      fill="#2C2669"
                    />
                    <path
                      d="M11.5286 10.4708C11.7889 10.7311 12.211 10.7311 12.4714 10.4708C12.7317 10.2104 12.7317 9.78829 12.4714 9.52794L8.47136 5.52794C8.21101 5.2676 7.7889 5.2676 7.52856 5.52794L3.52856 9.52794C3.26821 9.78829 3.26821 10.2104 3.52856 10.4708C3.78891 10.7311 4.21101 10.7311 4.47136 10.4708L7.99996 6.94216L11.5286 10.4708Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </svg>
                </SidebarItemBetween>
              </div>
            </SidebarNavigationWrapper>
          </div>

          <SidebarProfile>
            <SidebarItem
              style={{ paddingRight: "55px" }}
              to="/profile"
              active={activeLink === "/profile"}
            >
              <img src={avatarImg} alt="" />
              <SidebarText>Andrew Smith</SidebarText>
            </SidebarItem>
          </SidebarProfile>
        </SidebarContainer>
      </div>
    </div>
  );
}

export default Sidebar;
