import styled from "styled-components";
import { Link, } from 'react-router-dom';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: var(--Color-7, #FFF);
    z-index: 100;
`

export const SidebarContainer = styled.div`
    width: 256px;
    height: 100vh;
    background: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 12px;
    z-index: 101;
`

export const Logotype = styled.div`
    width: 100%;
    min-height: 44px;
    border-radius: 36.221px;
    background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarBetweenWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

export const SidebarText = styled.p`
    color: var(--500, #6053B9);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; 
`

export const SidebarLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: var(--100, #EFEEF8);
    margin: 24px 0;
`

export const SidebarNavigationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 15px;
  background-color: ${props => props.active ? '#EFEEF8' : 'transparent'};
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #EFEEF8;
  }
`;

export const SidebarItemBetween = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;   
  background-color: ${props => props.active ? '#EFEEF8' : 'transparent'};
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #EFEEF8;
  }
`;

export const SidebarProfile = styled.div`
    /* position: absolute;
    bottom: 24px; */
`