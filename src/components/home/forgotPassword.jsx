import React from "react";

import {
    DemoInputs,
    DemoLabels,
    LoginContainer,
    LoginLeft,
    LoginLeftButton,
    LoginLeftLine,
    LoginLeftLogo,
    LoginRight,
    ForgotPasswordDiv,
} from "./style";

import loginImage from "../../assets/login-image.png";
import earthIcon from "../../assets/earth-icon.svg";

import leftArrow from "../../assets/left-arrow.png";
import { Link } from "react-router-dom";

function ForgotPasswordComponent() {
    return (
        <LoginContainer>
            <LoginLeft>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <LoginLeftLogo>Logotype</LoginLeftLogo>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <img src={earthIcon} alt="" width={"28px"} />
                        <p
                            style={{
                                color: "#2C2669",
                                fontSize: "16px",
                                marginTop: "0",
                            }}
                        >
                            EN
                        </p>
                    </div>
                </div>

                <div>
                    <h1 style={{ marginBottom: "30px" }}>Forgot password</h1>
                    <DemoLabels htmlFor="email">Email</DemoLabels>
                    <DemoInputs
                        type="email"
                        placeholder="Enter email address"
                        id="email"
                        style={{ margin: "8px 0 30px 0" }}
                    />

                    <Link to={"/login/change-password"}>
                        <LoginLeftButton>Send</LoginLeftButton>
                    </Link>

                    <LoginLeftLine />

                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <ForgotPasswordDiv>
                            <img src={leftArrow} alt="" />
                            <p style={{ color: "black" }}>Back</p>
                        </ForgotPasswordDiv>
                    </Link>
                </div>
            </LoginLeft>

            <LoginRight>
                <img src={loginImage} alt="" style={{ borderRadius: "20px" }} />
            </LoginRight>
        </LoginContainer>
    );
}

export default ForgotPasswordComponent;
