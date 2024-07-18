import React from "react";

import {
    DemoInputs,
    DemoLabels,
    LoginContainer,
    LoginLeft,
    LoginLeftLine,
    LoginLeftLogo,
    LoginRight,
    ForgotPasswordDiv,
    SendButton,
    LoginContainerAnimation,
} from "./style";

import loginImage from "../../assets/login-image.png";
import earthIcon from "../../assets/earth-icon.svg";

import leftArrow from "../../assets/left-arrow.png";
import { Link } from "react-router-dom";
import { ModalInput, ModalInputContainer, ModalLabel } from "../teachers/style";

function ForgotPasswordComponent() {
    return (
        <LoginContainer>
            <div style={{position:"relative", overflow:"hidden", borderRadius:"20px"}}>
                <LoginContainerAnimation>
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

                        <div style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                            <h1>Forgot password</h1>

                            <ModalInputContainer>
                                <ModalLabel htmlFor="email">Email</ModalLabel>
                                <ModalInput
                                    type="email"
                                    placeholder="Enter email address"
                                    id="email"
                                />
                            </ModalInputContainer>

                            <Link to={"/login/change-password"}>
                                <SendButton>Send</SendButton>
                            </Link>

                            <LoginLeftLine />

                            <Link to={"/login"} style={{ width:"fit-content" }}>
                                <ForgotPasswordDiv>
                                    <img src={leftArrow} alt="" />
                                    <p>Back</p>
                                </ForgotPasswordDiv>
                            </Link>
                        </div>
                    </LoginLeft>
                </LoginContainerAnimation>
            </div>

            <LoginRight>
                <img src={loginImage} alt="" style={{ borderRadius: "20px" }} />
            </LoginRight>
        </LoginContainer>
    );
}

export default ForgotPasswordComponent;
