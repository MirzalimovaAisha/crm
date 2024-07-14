import React from "react";
import {
    NavbarContainer,
    NavbarLeft,
    NavbarRight,
    NavbarRightButton,
} from "./style";

import earthIcon from "../../assets/earth-icon.svg";
import { Link } from "react-router-dom";

function HomeNavbar() {
    return (
        <div style={{ width: "100%", height: "70px", position: "relative" }}>
            <NavbarContainer>
                <NavbarLeft>EduManSim</NavbarLeft>
                <NavbarRight>
                    <p style={{ color: "black" }}>010-1231-1313</p>
                    <NavbarRightButton $eng>
                        <img src={earthIcon} alt="" />
                        ENG
                    </NavbarRightButton>
                    <Link to={"/login"}>
                        <NavbarRightButton style={{ color: "white" }}>
                            Log in
                        </NavbarRightButton>
                    </Link>
                </NavbarRight>
            </NavbarContainer>
        </div>
    );
}

export default HomeNavbar;
